import Page from "common/entities/page/Page";
import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import useScrollTop from "common/hooks/useScrollTop";
import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import getComponent from "app/UIMapper";

const mainStyle = TailwindStyle.builder()
  .add("bg-gradient-to-b min-h-screen")
  .add("dark:from-dark dark:via-dark-light dark:to-dark dark:text-white")
  .add("from-light via-light-dark to-light text-dark")
  .get();
export interface MainProps {
  pages: Page<any>[];
}

const Main: FunctionComponent<MainProps> = (props: MainProps) => {
  useScrollTop();

  return (
    <main className={mainStyle}>
      <Switch>
        {props.pages.map((page: Page<any>, i: number) => (
          <Route key={i} exact path={page.route}>
            {getComponent(page.uiType, page.props)}
          </Route>
        ))}
      </Switch>
    </main>
  );
};

export default Main;