import type React from "react";
import { useState } from "react";
import CornerHoverCard from "../Components/corner-hover-card";
import Gagan from "../Leaderimages/gagan.jpeg";
import Sohel from "../Leaderimages/sohel.jpeg";
import Sameer from "../Leaderimages/sammer.jpg";
import Sahil from "../Leaderimages/Sahil.jpg";
import Gurwinder from "../Leaderimages/Gurwinder.jpg";

// Social media icon component
interface SocialIconsProps {
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    figma?: string;
  };
  isHovered: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ social, isHovered }) => {
  return (
    <div className="flex space-x-3 mt-4">
      {social.linkedin && (
        <a
          href={social.linkedin}
          className={`transition-transform hover:scale-110 ${
            isHovered ? "text-white hover:text-gray-200" : "hover:text-blue-600"
          }`}
          aria-label="LinkedIn"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>
        </a>
      )}
      {social.twitter && (
        <a
          href={social.twitter}
          className={`transition-transform hover:scale-110 ${
            isHovered ? "text-white hover:text-gray-200" : "hover:text-blue-400"
          }`}
          aria-label="Twitter"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      )}
      {social.github && (
        <a
          href={social.github}
          className={`transition-transform hover:scale-110 ${
            isHovered ? "text-white hover:text-gray-200" : "hover:text-gray-800"
          }`}
          aria-label="GitHub"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      )}
      {social.instagram && (
        <a
          href={social.instagram}
          className={`transition-transform hover:scale-110 ${
            isHovered ? "text-white hover:text-gray-200" : "hover:text-pink-600"
          }`}
          aria-label="Instagram"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      )}
      {social.figma && (
        <a
          href={social.figma}
          className={`transition-transform hover:scale-110 ${
            isHovered
              ? "text-white hover:text-gray-200"
              : "hover:text-purple-600"
          }`}
          aria-label="Figma"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
          </svg>
        </a>
      )}
    </div>
  );
};

// Team member type
interface TeamMember {
  id: number;
  name: string;
  profession: string;
  description: string;
  featured: boolean;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    figma?: string;
  };
}

export default function AdvancedDemo() {
  // Track hover state for each card
  const [hoveredCards, setHoveredCards] = useState<Record<number, boolean>>({});

  // Example team data with actual images
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Gagan",
      profession: "UI/UX Designer",
      description:
        "UI/UX designer specialist with expertise in creating intuitive and engaging user interfaces.",
      featured: true,
      image: Gagan,
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Sahil",
      profession: "Graphic Designer",
      description:
        "Passionate and skilled graphic designer with a keen eye for detail and a commitment to visual excellence.",
      featured: false,
      image: Sahil,
      social: {
        figma: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Sohel",
      profession: "Software Developer",
      description:
        "Passionate designer and developer with expertise in both web and app development.",
      featured: true,
      image: Sohel,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Sameer",
      profession: "Video Editor",
      description:
        "Creative video editor pushing boundaries and transforming ideas into stunning visual stories.",
      featured: false,
      image: Sameer,
      social: {
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "Gurwinder",
      profession: "Full Stack Developer",
      description:
        "Full Stack Developer with diversified skillset from writing optimised code to production level deployments.",
      featured: false,
      image: Gurwinder,
      social: {
        github: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="bg-[#F8F8FF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-sm font-medium mb-2 tracking-wider text-blue-600">
            MEET THE TEAM
          </p>
          <h2 className="text-4xl font-bold mb-2">
            MINDS BEHIND FAST, SEO-FIRST SAAS
          </h2>
          <h3 className="text-2xl font-bold">AT INNOSPHERE</h3>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Featured Card - Large */}
          <div className="col-span-1 md:col-span-2">
            {teamMembers[0] && (
              <CornerHoverCard
                hoverColor="#192F59"
                fixedCorner="top-left"
                onMouseEnter={() =>
                  setHoveredCards({
                    ...hoveredCards,
                    [teamMembers[0].id]: true,
                  })
                }
                onMouseLeave={() =>
                  setHoveredCards({
                    ...hoveredCards,
                    [teamMembers[0].id]: false,
                  })
                }
              >
                <div className="md:flex h-full">
                  <div className="md:w-1/2">
                    <img
                      src={teamMembers[0].image}
                      alt={teamMembers[0].name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div
                    className={`md:w-1/2 p-6 transition-colors duration-500 ${
                      hoveredCards[teamMembers[0].id]
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-1">
                      {teamMembers[0].name}
                    </h3>
                    <p
                      className={`text-sm uppercase tracking-wider mb-3 ${
                        hoveredCards[teamMembers[0].id]
                          ? "text-gray-200"
                          : "text-blue-600"
                      }`}
                    >
                      {teamMembers[0].profession}
                    </p>
                    <p
                      className={`mb-4 ${
                        hoveredCards[teamMembers[0].id]
                          ? "text-gray-200"
                          : "text-gray-600"
                      }`}
                    >
                      {teamMembers[0].description}
                    </p>
                    <SocialIcons
                      social={teamMembers[0].social}
                      isHovered={hoveredCards[teamMembers[0].id] || false}
                    />
                  </div>
                </div>
              </CornerHoverCard>
            )}
          </div>

          {/* Standard Cards */}
          {teamMembers.slice(1).map((member, index) => {
            // Determine if this should be a horizontal card
            const isHorizontal = index === 2;
            const colSpan = isHorizontal
              ? "col-span-1 md:col-span-2"
              : "col-span-1";

            return (
              <div key={member.id} className={colSpan}>
                <CornerHoverCard
                  hoverColor="#192F59"
                  fixedCorner="random"
                  onMouseEnter={() =>
                    setHoveredCards({ ...hoveredCards, [member.id]: true })
                  }
                  onMouseLeave={() =>
                    setHoveredCards({ ...hoveredCards, [member.id]: false })
                  }
                >
                  {isHorizontal ? (
                    <div className="md:flex h-full">
                      <div className="md:w-1/2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div
                        className={`md:w-1/2 p-6 transition-colors duration-500 ${
                          hoveredCards[member.id]
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        <h3 className="text-2xl font-bold mb-1">
                          {member.name}
                        </h3>
                        <p
                          className={`text-sm uppercase tracking-wider mb-3 ${
                            hoveredCards[member.id]
                              ? "text-gray-200"
                              : "text-blue-600"
                          }`}
                        >
                          {member.profession}
                        </p>
                        <p
                          className={`mb-4 ${
                            hoveredCards[member.id]
                              ? "text-gray-200"
                              : "text-gray-600"
                          }`}
                        >
                          {member.description}
                        </p>
                        <SocialIcons
                          social={member.social}
                          isHovered={hoveredCards[member.id] || false}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="h-60">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div
                        className={`p-6 transition-colors duration-500 ${
                          hoveredCards[member.id]
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        <h3 className="text-xl font-bold mb-1">
                          {member.name}
                        </h3>
                        <p
                          className={`text-sm uppercase tracking-wider mb-3 ${
                            hoveredCards[member.id]
                              ? "text-gray-200"
                              : "text-blue-600"
                          }`}
                        >
                          {member.profession}
                        </p>
                        <p
                          className={`mb-4 ${
                            hoveredCards[member.id]
                              ? "text-gray-200"
                              : "text-gray-600"
                          }`}
                        >
                          {member.description}
                        </p>
                        <SocialIcons
                          social={member.social}
                          isHovered={hoveredCards[member.id] || false}
                        />
                      </div>
                    </>
                  )}
                </CornerHoverCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
