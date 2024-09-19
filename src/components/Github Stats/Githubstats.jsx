const GithubStats = () => {
  return (
    <>
      <div className="px-12 gap-5 justify-center py-14 md:px-16 lg:grid lg:grid-cols-2 gap-x-0 lg:justify-end xl:py-20 h-auto">
        <img
          src="https://github-readme-stats.vercel.app/api?username=saroj123-del&show_icons=true&locale=en"
          alt="Santosh Adhikari"
          className="w-auto"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=saroj123-del&"
          alt="Santosh Adhikari"
          className="w-auto pt-5"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=saroj123-del&show_icons=true&locale=en&layout=compact"
          alt="Santosh Adhikari"
          className="w-auto pt-5"
        />
      </div>
    </>
  );
};

export default GithubStats;
