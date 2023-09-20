import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="pt-2">MarvelPage</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
