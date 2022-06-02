import { useCallback, useState } from 'react';

interface ISideBar {
  openKeys: string[];
  selectedKey?: string;
}

export default function useSideBarModel() {
  const [sideBar, setSidebar] = useState<ISideBar>({
    openKeys: [],
  });
  const selectSideBar = useCallback((key: string) => {
    setSidebar({ ...sideBar, selectedKey: key });
  }, []);
  const openSideBar = useCallback((keys: string[]) => {
    setSidebar({ ...sideBar, openKeys: keys });
  }, []);
  return {
    sideBar,
    selectSideBar,
    openSideBar,
  };
}
