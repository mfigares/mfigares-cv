import { SkillGroup as SkillGroupType } from '../data/types';

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="cv-skill-group">
      <span className="cv-skill-category">{group.category}</span>
      <span className="cv-skill-list">{group.skills.join(', ')}</span>
    </div>
  );
}
