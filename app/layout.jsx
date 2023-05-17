import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "Promptopolis",
  description: "Descubrir y compartir prompts de IA",
};
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
