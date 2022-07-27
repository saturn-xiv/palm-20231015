use casbin::{MgmtApi, RbacApi};
use palm::plugins::nut::models::user::Item as User;

#[tokio::test]
async fn casbin() {
    let cfg = palm::orm::postgresql::Config::default();
    let mut enf = cfg.enforcer(2).await.unwrap();
    let user = "hello, casbin";
    let manager = "manager";

    {
        enf.add_roles_for_user(manager, vec!["aaa".to_string(), "bbb".to_string()], None)
            .await
            .unwrap();
        enf.add_permissions_for_user(
            "aaa",
            vec![
                vec!["aaa-data-1".to_string(), "aaa-action-1".to_string()],
                vec!["aaa-data-2".to_string(), "aaa-action-2".to_string()],
            ],
        )
        .await
        .unwrap();
    }

    {
        enf.add_roles_for_user(
            user,
            vec![
                User::ADMINISTRATOR.to_string(),
                User::ROOT.to_string(),
                manager.to_string(),
            ],
            None,
        )
        .await
        .unwrap();

        for it in vec![User::ADMINISTRATOR, User::ROOT, manager] {
            assert!(enf.has_role_for_user(user, it, None));
        }
    }
    {
        enf.add_permissions_for_user(
            user,
            vec![
                vec!["data-1".to_string(), "action-1".to_string()],
                vec!["data-2".to_string(), "action-2".to_string()],
                vec!["data-3".to_string(), "action-3".to_string()],
            ],
        )
        .await
        .unwrap();
        enf.add_permissions_for_user(
            manager,
            vec![
                vec!["data-11".to_string(), "action-11".to_string()],
                vec!["data-21".to_string(), "action-21".to_string()],
                vec!["data-31".to_string(), "action-31".to_string()],
            ],
        )
        .await
        .unwrap();
        for i in 1..3 {
            assert!(enf.has_permission_for_user(
                user,
                vec![format!("data-{}", i), format!("action-{}", i)]
            ));
            assert!(enf.has_permission_for_user(
                manager,
                vec![format!("data-{}1", i), format!("action-{}1", i)]
            ));

            // assert!(enf.has_permission_for_user(
            //     user,
            //     vec![format!("data-{}1", i), format!("action-{}1", i)]
            // ));
        }
    }

    println!("all roles {:?}", enf.get_all_roles());
    println!("all actions {:?}", enf.get_all_actions());
    println!("all objects {:?}", enf.get_all_objects());
    println!("all subjects {:?}", enf.get_all_subjects());
    println!(
        "implicit roles {:?}",
        enf.get_implicit_roles_for_user(user, None)
    );
    println!(
        "implicit permissions {:?}",
        enf.get_implicit_permissions_for_user(user, None)
    );
}
