import React from "react";
import { memberdata } from "../../data/teammember"; // Importing the member data
import Image from "next/image";
import "./TeamMember.css";

const MemberList = () => {
  // Group members by designation
  const groupedMembers = memberdata.reduce((groups, member) => {
    const { designation } = member;
    if (!groups[designation]) {
      groups[designation] = [];
    }
    groups[designation].push(member);
    return groups;
  }, {});

  // Helper function to render members by designation
  const renderMembersByDesignation = (designationName, title) => (
    groupedMembers[designationName] ? (
      <div key={designationName} className="designation-section">
        <h2 className="heading1">{title}</h2>
        <div className="member-list">
          {groupedMembers[designationName].map((member) => (
            <div key={member.ID} className="member-item">
              <Image
                className="imageic"
                src={member.image}
                alt={member.designation1}
              />
              <h3 className="design">{member.designation1}</h3>
              <p className="design">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    ) : null
  );

  return (
    <div>
      {/* Render core members */}
      {renderMembersByDesignation("coremember", "Core Members")}

      {/* Render executive members */}
      {renderMembersByDesignation("executive", "Executive Members")}

      {/* Render junior members */}
      {renderMembersByDesignation("junior member", "Juniors")}
    </div>
  );
};

export default MemberList;
