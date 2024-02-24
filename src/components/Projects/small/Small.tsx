import Shape from "../../../assets/icons/shape.png";

interface SmallProjectItemProps {
  title: string;
  desc: string;
  tech: string;
  option: string;
}
const projects = [
  {
    title: "Ramdhan Dishes",
    tech: "angular, nodejs, expressjs, mongodb",
    desc: "Plan your cooking schedule in accordance with Islamic prayer times!.",
    option: " Website",
  },
  {
    title: "Corona virus",
    tech: "flutter, nodejs, expressjs, mongodb",
    desc: " on COVID-19, Real-time Coronavirus Monitoring Application",
    option: "Mobile ",
  },
  {
    title: "Kerya app",
    tech: "nextjs, nestjs, expressjs, postgres, graphql",
    desc: "An app designed to facilitate house rentals, offering advanced filters",
    option: "website ",
  },
  {
    title: "Booking flight",
    tech: "java, javafx, postgres, sql",
    desc: "  app that assists users in viewing and reserving flights, simplifying the process ",
    option: "Desktop ",
  },
  {
    title: "Google Club",
    tech: "android",
    desc: "an app that visually showcases club goals,members..through engaging animations",
    option: "Mobile ",
  },
];

const Small = () => {
  return (
    <div className="small_container" data-aos="fade-up">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            Small Projects
          </div>
          <div className="line"></div>
        </div>
      </div>

      <div className="small_container_items">
        {projects.map((project: any) => (
          <SmallProjectItem
            tech={project.tech}
            title={project.title}
            desc={project.desc}
            option={project.option}
          />
        ))}
      </div>
      <img src={Shape} alt="shape" className="shape" />
    </div>
  );
};

export default Small;

export const SmallProjectItem = ({
  tech,
  title,
  desc,
  option,
}: SmallProjectItemProps) => {
  return (
    <div className="smallProjectItem" data-aos="fade-right">
      <div className="title">
        {" "}
        <p>{tech}</p>
      </div>
      <div className="body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="button">
          {option}
          {"<~>"}
        </div>
      </div>
    </div>
  );
};
