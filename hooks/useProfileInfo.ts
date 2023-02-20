import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileInfoType } from "@/stores/profile";
import { setImage, setName, setShortIntroduce } from "@/stores/profile";
import { RootState } from "@/stores/reducer";

export default function useProfileInfo() {
  const profileInfo = useSelector<RootState, profileInfoType>(
    (state) => state.profile
  );
  const dispatch = useDispatch();

  const updateImage = useCallback((payload: string) => {
    dispatch(setImage(payload));
  }, []);

  const updateName = useCallback((payload: string) => {
    dispatch(setName(payload));
  }, []);

  const updateShortIntroduce = useCallback((payload: string) => {
    dispatch(setShortIntroduce(payload));
  }, []);

  return { profileInfo, updateImage, updateName, updateShortIntroduce };
}
