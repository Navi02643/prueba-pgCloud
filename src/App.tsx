import { useState, useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./context/Global_context";

import { containerBorder } from "./styles/Styles";

function App() {
  const [count, setCount] = useState<number>(0);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const { user, handleUser } = useContext(GlobalContext);
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const handleCount = () => {
    const name = nameRef.current?.value ?? "";
    const age = parseInt(ageRef.current?.value ?? "0");
    const newUser = { name, age };
    handleUser(newUser);
    setCount(count + 1);
    console.log(id);
  };

  useEffect(() => console.log(user), [user]);

  return (
    <>
      <input type="text" ref={nameRef} />
      <input type="number" ref={ageRef} />
      <button onClick={handleCount}>
        {t("App.test")} {count}
      </button>
      <br />
      <br /><br />
      <div style={containerBorder} onClick={()=>console.log(123)}>
        <label htmlFor="">{id}</label>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
