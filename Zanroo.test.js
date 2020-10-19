const insertHTMLTags = require("./Zanroo");

test("Test case 1", () => {
  expect(
    insertHTMLTags(
      ["simply"],
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    )
  ).toBe(
    "Lorem Ipsum is <strong>simply</strong> dummy text of the printing and typesetting industry"
  );
});

test("Test case 2", () => {
  expect(
    insertHTMLTags(
      ["Ipsum", "printing"],
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    )
  ).toBe(
    "Lorem <strong>Ipsum</strong> is simply dummy text of the <strong>printing</strong> and typesetting industry"
  );
});

test("Test case 3", () => {
  expect(
    insertHTMLTags(
      ["simply dummy text", "text of the printing"],
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    )
  ).toBe(
    "Lorem Ipsum is <strong>simply dummy <strong>text</strong> of the printing</strong> and typesetting industry"
  );
});

test("Test case 4", () => {
  expect(
    insertHTMLTags(
      ["dummy text of the printing", "text of the"],
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    )
  ).toBe(
    "Lorem Ipsum is simply <strong>dummy <strong>text of the</strong> printing</strong> and typesetting industry"
  );
});

test("Test case 5", () => {
  expect(
    insertHTMLTags(
      ["dummy text of the printing", "ting and typesetting"],
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    )
  ).toBe(
    "Lorem Ipsum is simply <strong>dummy text of the prin<strong>ting</strong> and typesetting</strong> industry"
  );
});

test("Test case 6", () => {
  expect(
    insertHTMLTags(
      ["dummy", "taxi"],
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    )
  ).toBe(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  );
});

test("Test case 7", () => {
  expect(
    insertHTMLTags(
      ["simpy", "dummu"],
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    )
  ).toBe(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  );
});