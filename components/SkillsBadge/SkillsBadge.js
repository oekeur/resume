import { CircularProgressbar } from "react-circular-progressbar";
import stylesBadge from "./skillsbadge.module.scss"

const SkillsBadge = ({ data }) => {
  return (
    data.map((skill, index)=> {
      return (
        <div key={index} className={stylesBadge.margin}>
                    <span style={{ width: 30, height: 30, display:"inline-block" }}>
                      <CircularProgressbar value={skill.level} text="" strokeWidth={14}/>
                    </span>{" "}
          {skill.name}
        </div>)
    })
  );
}

export default SkillsBadge;