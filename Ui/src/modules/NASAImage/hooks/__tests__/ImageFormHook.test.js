import { renderHook, act } from "@testing-library/react-hooks";
import useImageForm from "../ImageFormHook";
import { Provider } from "react-redux";
import { configureStore } from "store/store";
import { fromJS } from "immutable";
import data from "store/__tests__/mockstore.json";
import { UserContextProvider } from "common/context";

test("should set search", () => {
    const userInfo = {loginId:"kannan", name:"kannan"};
  const { result } = renderHook(() => useImageForm(), {
    wrapper: ({ children }) => (
        <UserContextProvider value={userInfo}>
            <Provider store={configureStore(fromJS(data))}>{children}</Provider>
        </UserContextProvider>
    ),
  });

  act(() => {
    result.current.onChangeSearch({ target: { value: "test" } });
  });
  expect(result.current.search).toBe("test");

});
