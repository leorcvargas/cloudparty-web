import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./GameServerCreateForm.styles";

type FormValue = {
  name: string;
  type: "MINECRAFT";
};

function CreateForm() {
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    type: "MINECRAFT",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/game-server`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      navigate("/");
    } catch (error) {
      alert("An error was encountered while trying to create the game server.");
    } finally {
      setLoading(false);
    }
  };

  const makeOnChange =
    (field: keyof FormValue) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormValue({ ...formValue, [field]: event.target.value });
    };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.InputArea>
        <S.Label htmlFor="name">Name</S.Label>
        <S.Input name="name" onChange={makeOnChange("name")} required />
      </S.InputArea>

      <S.Label htmlFor="type">Type</S.Label>
      <S.Select name="name" onChange={makeOnChange("type")} required>
        <option value="MINECRAFT">Minecraft</option>
      </S.Select>

      <S.SubmitButton disabled={loading}>Create</S.SubmitButton>
    </S.Form>
  );
}

export default CreateForm;
