import sut from ".";

test("should throw an error if the the assets load went wrong", async () => {
  const fakeDependency = {
    doSomethingAsync: jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error("ERROR!")))
  };

  sut(fakeDependency);

  await expect(fakeDependency.doSomethingAsync).rejects.toThrowError(
    new Error("ERROR!")
  );
});
