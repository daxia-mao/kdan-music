import React, { useEffect, useState } from "react";
import S from "./index.styled";
import { ContentType } from "@/stories/Kdan Music Book/types";
import {
  useAppDispatch,
  useAppSelector,
} from "@/stories/Kdan Music Book/app/hooks";
import {
  checkLibrary,
  removeItemFromLibrary,
  saveItemToLibrary,
} from "@/stories/Kdan Music Book/features/user/userSlice";

export type SavedButtonStyledProps = {
  isSaved: boolean;
};

type SavedButtonProps = {
  type: ContentType;
  id: string;
};

function SavedButtonStyled({ isSaved }: SavedButtonStyledProps) {
  return <S.Wrapper>{isSaved ? <S.SavedIcon /> : <S.UnsavedIcon />}</S.Wrapper>;
}

function SavedButton({ type, id }: SavedButtonProps) {
  const [isSaved, setIsSaved] = useState(false);
  const authState = useAppSelector((state) => state.authReducer.auth.status);
  const library = useAppSelector((state) => state.userReducer.user.library);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authState === "success") {
      if (checkLibrary({ library, type, id })) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    }
  }, [library]);

  const handleClick = () => {
    if (isSaved) {
      dispatch(removeItemFromLibrary({ type, id }));
      setIsSaved(false);
    } else {
      dispatch(saveItemToLibrary({ type, id }));
      setIsSaved(true);
    }
  };

  return authState === "success" ? (
    <div onClick={handleClick}>
      <SavedButtonStyled isSaved={isSaved} />
    </div>
  ) : (
    ""
  );
}

export default SavedButtonStyled;
export { SavedButton };
