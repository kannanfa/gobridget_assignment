import { renderHook, act } from "@testing-library/react-hooks";
import useImageStore from "../ImageStoreHook";
import { Provider } from "react-redux";
import { configureStore } from "store/store";
import { fromJS } from "immutable";
import data from "store/__tests__/mockstore.json";
import { UserContextProvider } from "common/context";

test("should set search", () => {
    const userInfo = {loginId:"kannan", name:"kannan"};
  const { result } = renderHook(() => useImageStore(), {
    wrapper: ({ children }) => (
        <UserContextProvider value={userInfo}>
            <Provider store={configureStore(fromJS(data))}>{children}</Provider>
        </UserContextProvider>
    ),
  });
 
  expect(result.current.currentPage).toBe(1);
  expect(result.current.next).toBe(2);
  expect(result.current.isLoading).toBe(false);
  expect(result.current.searchText).toBe("mars");
});
