import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-ful flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="max-mb:hidden " />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;

{
  /*

  [] Implement Search 
    - Search by prompts
    - Search by tag
    - Search by username
  [] Implement Click on tag 
  [] Implement View other profiles


  https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing/tree/main
*/
}
