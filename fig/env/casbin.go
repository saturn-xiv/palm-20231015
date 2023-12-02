package env

import (
	"strings"

	"github.com/casbin/casbin/v2"
	"github.com/casbin/casbin/v2/persist"
	gormadapter "github.com/casbin/gorm-adapter/v3"
	rediswatcher "github.com/casbin/redis-watcher/v2"
	log "github.com/sirupsen/logrus"
	"gorm.io/gorm"
)

func (p *Redis) CasbinWatcher() (persist.Watcher, error) {
	return rediswatcher.NewWatcherWithCluster(strings.Join(p.Addrs(), ","), rediswatcher.WatcherOptions{
		Channel:    p.Namespace + "-casbin-watcher",
		IgnoreSelf: false,
	})

}

func casbinUpdateCallback(msg string) {
	log.Info(msg)
}
func OpenCasbin(db *gorm.DB, watcher persist.Watcher, model string) (*casbin.Enforcer, error) {

	adapter, err := gormadapter.NewAdapterByDB(db)
	if err != nil {
		return nil, err
	}
	enforcer, err := casbin.NewEnforcer(model, adapter)
	if err != nil {
		return nil, err
	}

	if err = enforcer.SetWatcher(watcher); err != nil {
		return nil, err
	}

	if err = watcher.SetUpdateCallback(casbinUpdateCallback); err != nil {
		return nil, err
	}

	if err = enforcer.LoadPolicy(); err != nil {
		return nil, err
	}
	return enforcer, nil
}
