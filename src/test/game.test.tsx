import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Question } from "../models/Question/question.model";
import { MemoryRouter } from "react-router-dom";
import { appRoutes } from "../routes/routeConstants/appRoutes";
import GameCard from "../shared/components/GameCard";

let container: any = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Render question on screen", async () => {
  const fakeQuestion: Question = {
    id: 1,
    question: "Worlds best programming language?",
    answer: "JavaScript",
    category: {
      title: "Software development",
    },
  };
  //@ts-ignore
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeQuestion),
    })
  );

  const component = (
    <MemoryRouter initialEntries={[appRoutes.GAME]}>
      <GameCard
        question={fakeQuestion}
        questionNo={1}
        loading={false}
        submitHandler={() => {}}
      />
    </MemoryRouter>
  );

  await act(async () => {
    render(component, container);
  });
});
