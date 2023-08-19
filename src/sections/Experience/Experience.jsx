import "./Experience.css";

export default function Experience({ brand }) {
  const data = [
    {
      id: 1,
      company: "Loyalcoder",
      date: "2023 - Present",
      position: "Next js Developer",
      location: "Pabna, Bangladesh",
      details:
        "I make next js website templates for their themeforest portfolio. ",
      skills: [
        {
          id: 1,
          name: "Next js",
        },
        {
          id: 2,
          name: "React js",
        },
        {
          id: 3,
          name: "Tailwind CSS",
        },
        {
          id: 4,
          name: "Bootstrap",
        },
        {
          id: 5,
          name: "Git",
        },
        {
          id: 6,
          name: "Vercel",
        },
        {
          id: 7,
          name: "Framer motion",
        },
        {
          id: 8,
          name: "Parallax",
        },
      ],
    },
    // {
    //   id: 2,
    //   company: "Facebook",
    //   date: "2020 - 2022",
    //   position: "Software Engineer",
    //   location: "San Francisco",
    //   details:
    //     "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "React",
    //     },
    //     {
    //       id: 2,
    //       name: "Node",
    //     },
    //     {
    //       id: 3,
    //       name: "PHP",
    //     },
    //     {
    //       id: 4,
    //       name: "GraphQL",
    //     },
    //     {
    //       id: 5,
    //       name: "Presto",
    //     },
    //     {
    //       id: 6,
    //       name: "Cassandra",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   company: "Amazon",
    //   date: "2016 - 2020",
    //   position: "Software Engineer",
    //   location: "Seattle",
    //   details:
    //     "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
    //   skills: [
    //     {
    //       id: 1,
    //       name: "Java",
    //     },
    //     {
    //       id: 2,
    //       name: "Python",
    //     },
    //     {
    //       id: 3,
    //       name: "S3",
    //     },
    //     {
    //       id: 4,
    //       name: "RDS",
    //     },
    //     {
    //       id: 5,
    //       name: "Redshift",
    //     },
    //     {
    //       id: 6,
    //       name: "PySpark",
    //     },
    //     {
    //       id: 7,
    //       name: "HDFS",
    //     },
    //     {
    //       id: 8,
    //       name: "Apache Airflow",
    //     },
    //   ],
    // },
  ];

  return (
    <section id="exp." className="w-full h-auto flex justify-center">
      <div className="wrapper py-28 max-xl:ml-28 max-xl:mr-5">
        <div className="flex items-center justify-center gap-5 mb-7 max-sm:justify-start">
          <h1 className="text-7xl max-sm:text-4xl font-bold">
            Experience
            <span className={brand.color + " " + "text-9xl max-sm:text-6xl"}>
              .
            </span>
          </h1>
          <div className="header-line"></div>
        </div>
        <div className="experience">
          {data.map((props) => {
            return (
              <div key={props.id} className="mt-7">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">{props.company}</h1>
                  <h3>{props.date}</h3>
                </div>
                <div className="flex items-center justify-between my-3">
                  <h1 className={"text-lg font-bold" + " " + brand.color}>
                    {props.position}
                  </h1>
                  <h3>{props.location}</h3>
                </div>
                <p>{props.details}</p>
                <ul className="flex flex-wrap gap-5 my-5">
                  {props.skills.map((props) => {
                    return (
                      <li
                        key={props.id}
                        className="w-auto h-6 rounded-xl flex items-center justify-center bg-light"
                      >
                        <h4 className="px-3">{props.name}</h4>
                      </li>
                    );
                  })}
                </ul>
                <div className="line-three"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
