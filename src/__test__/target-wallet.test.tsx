import { describe, it, expect, vi, afterEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TargetWallet from "@pages/home/components/target-wallet";
import configureStore from "redux-mock-store";

vi.mock("@mui/material", async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import("@mui/material")>()),
    useMediaQuery: vi.fn().mockReturnValue(true),
  };
});

const mockStore = configureStore();

describe("Target Wallet", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render target wallet", () => {
    const initialState = {
      account: {
        isValidChain: true,
      },
      target: {
        address: "0x0000000000000000000000000000000000000000",
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <TargetWallet />
      </Provider>,
    );

    expect(screen.getByTestId("target-wallet")).toBeInTheDocument();
  });

  it("should set the target wallet", async () => {
    const initialState = {
      account: {
        isValidChain: false,
      },
      target: {
        address: null,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <TargetWallet />
      </Provider>,
    );

    const mockWallet = "0x1234567890abcdef1234567890abcdef";

    const inputElement = screen.getByTestId("target-wallet-input").querySelector("input");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement as HTMLInputElement, { target: { value: mockWallet } });
    expect(inputElement).toHaveValue(mockWallet);
  });
});
