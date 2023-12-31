import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="João"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          />
          <Post
            author="João"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
