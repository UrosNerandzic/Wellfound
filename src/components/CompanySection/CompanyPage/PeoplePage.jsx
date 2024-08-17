"use client";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import LoadingPage from "../LoadingPage";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import { PeopleTextLong } from "../PeopleTextLong";
import { BackgroundComponents } from "../BackgroundComponents";
import React from "react";
function PeoplePage({ data, people }) {
  const teams = people.filter((team) => team.company === data.title);

  return (
    <section className="styles_component__thTp9">
      <>
        <h1 className="text-xl font-medium text-dark-aaaa antialiased mb-4">
          People at {data.title}
        </h1>
        {data.people ? (
          <div className="styles_box__4RMl8 flex flex-col">
            <div className="styles_component__CVrbV">
              <PortableText value={data.people} components={PeopleTextLong} />
            </div>
          </div>
        ) : null}
        {teams.some((team) => team.founders === true) && (
          <div className="styles_box__4RMl8 flex flex-col">
            <div className="flex flex-row justify-between items-end w-full">
              <header className="text-dark-aaaa font-medium antialiased text-lg mb-4">
                Founders
              </header>
            </div>
            <div className="styles_component__ivX7J styles_twoColumn__XlBrn">
              {teams.map((team, index) => (
                <React.Fragment key={index}>
                  {team.founders === true ? (
                    <div className="styles_component__Wb41n styles_component__eZBBg styles_regular__5YOcF styles_component__7lXVE styles_white__yJuQK">
                      <div className="styles_header__LhnxP">
                        <div className="styles_identity__CgS8E">
                          <div className="styles_left__aDiT6">
                            <h4 className="styles-module_component__3ZI84 styles_name__oO6gd text-lg font-medium">
                              {team.nameAndSurname}
                            </h4>
                            <span className="styles_byline__wPnKW">
                              {team.specialty}
                              <span className="styles_location__R5jer">
                                {team.location}
                              </span>
                            </span>
                          </div>
                          <div className="styles_avatar__6ymfb inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-full h-12 w-12 styles_avatar__6ymfb">
                            <Image
                              width={46}
                              height={46}
                              className="rounded-full"
                              src={urlFor(team.imagePerson).url()}
                              alt="person"
                              priority
                            />
                          </div>
                        </div>
                        <div className="styles_bio__FGTSf">
                          {team.description}
                        </div>
                      </div>
                      <div className="styles_background__vuPVB">
                        <section className="styles_component__kCdPa styles_large__A7lL5">
                          <h6 className="styles-module_component__3ZI84 styles-module_flow__FV70c styles_header___2xdj text-dark-a text-xs font-medium uppercase">
                            Background
                          </h6>
                          <ul>
                            <PortableText
                              value={team.background}
                              components={BackgroundComponents}
                            />
                          </ul>
                        </section>
                      </div>
                    </div>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        <div className="styles_box__4RMl8 flex flex-col">
          <header className="text-dark-aaaa font-medium antialiased text-lg mb-4">
            Team
          </header>
          <div className="styles_component__ivX7J styles_threeColumn__Txyiv">
            {teams
              .filter((team) => !team.formerTeam && !team.boardMember)
              .map((team, index) => (
                <div
                  key={index}
                  className="styles_component__Wb41n styles_component__eZBBg styles_regular__5YOcF styles_expandedCard__hh_Lr styles_component__7lXVE styles_white__yJuQK">
                  <div className="styles_header__LhnxP">
                    <div>
                      <div className="styles_identity__CgS8E">
                        <div className="styles_left__aDiT6">
                          <h4>{team.nameAndSurname}</h4>
                          <span className="styles_byline__wPnKW">
                            {team.specialty}
                            <span className="styles_location__R5jer">
                              {team.location}
                            </span>
                          </span>
                        </div>
                        <div className="styles_avatar__6ymfb inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-full h-12 w-12 styles_avatar__6ymfb">
                          <Image
                            width={46}
                            height={46}
                            className="rounded-full"
                            src={urlFor(team.imagePerson).url()}
                            alt="person"
                            priority
                          />

                          {team.via === true ? (
                            <div className="absolute border-solid border-gray-200 text-center font-medium uppercase leading-none antialiased p-1 text-2xs bg-gtmyellow-100 border-gtmyellow-100 text-gtmyellow-700 rounded-md -top-3 right-1">
                              <div className="flex justify-center gap-1">
                                <Tippy content={"Hired via Wellfound"}>
                                  <span>Via</span>
                                </Tippy>
                              </div>
                            </div>
                          ) : null}
                          {team.advisors === true ? (
                            <div className="absolute border-solid border-gray-200 text-center font-medium uppercase leading-none antialiased p-1 right-0 text-2xs bg-gtmpurple-100 border-gtmpurple-100 text-gtmpurple-700 rounded-full px-2 -top-3">
                              <div className="flex justify-center gap-1">
                                <Tippy content={"Advisor"}>
                                  <span>a</span>
                                </Tippy>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="styles_bio__FGTSf">
                        {team.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {teams.some((team) => team.boardMember === true) && (
          <>
            <header className="text-dark-aaaa font-medium antialiased text-lg mb-4">
              Board members and advisors
            </header>
            <div className="styles_box__4RMl8 flex flex-col">
              <div className="styles_component__ivX7J styles_threeColumn__Txyiv">
                {teams.map((team, index) => (
                  <React.Fragment key={index}>
                    {team.boardMember === true ? (
                      <div className="styles_component__Wb41n styles_component__eZBBg styles_regular__5YOcF styles_component__7lXVE styles_white__yJuQK">
                        <div className="styles_header__LhnxP">
                          <div className="styles_identity__CgS8E">
                            <div className="styles_left__aDiT6">
                              <h4 className="styles-module_component__3ZI84 styles_name__oO6gd text-lg font-medium">
                                {team.nameAndSurname}
                              </h4>
                              <span className="styles_byline__wPnKW">
                                {team.specialty}
                                <span className="styles_location__R5jer">
                                  {team.location}
                                </span>
                              </span>
                            </div>
                            <div className="styles_avatar__6ymfb inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-full h-12 w-12 styles_avatar__6ymfb">
                              <Image
                                width={46}
                                height={46}
                                className="rounded-full"
                                src={urlFor(team.imagePerson).url()}
                                alt="person"
                                priority
                              />
                              {team.boardMember === true ? (
                                <div className="absolute border-solid border-gray-200 text-center font-medium uppercase leading-none antialiased p-1 text-2xs bg-gtmgreen-100 border-gtmgreen-100 text-gtmgreen-400 rounded-full px-2 -top-3 right-1">
                                  <div className="flex justify-center gap-1">
                                    <Tippy content={"Board Member"}>
                                      <span>b</span>
                                    </Tippy>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="styles_bio__FGTSf">
                            {team.description}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        )}
        {teams.some((team) => team.formerTeam === true) && (
          <>
            <header className="text-dark-aaaa font-medium antialiased text-lg mb-4">
              Former team
            </header>
            <div className="styles_box__4RMl8 flex flex-col">
              <div className="styles_component__ivX7J styles_threeColumn__Txyiv">
                {teams.map((team, index) => (
                  <React.Fragment key={index}>
                    {team.formerTeam === true ? (
                      <div className="styles_component__Wb41n styles_component__eZBBg styles_regular__5YOcF styles_component__7lXVE styles_white__yJuQK">
                        <div className="styles_header__LhnxP">
                          <div className="styles_identity__CgS8E">
                            <div className="styles_left__aDiT6">
                              <h4 className="styles-module_component__3ZI84 styles_name__oO6gd text-lg font-medium">
                                {team.nameAndSurname}
                              </h4>
                              <span className="styles_byline__wPnKW">
                                {team.specialty}
                              </span>
                            </div>
                            <div className="styles_avatar__6ymfb inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-full h-12 w-12 styles_avatar__6ymfb">
                              <Image
                                width={46}
                                height={46}
                                className="rounded-full"
                                src={urlFor(team.imagePerson).url()}
                                alt="person"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        )}
      </>
    </section>
  );
}

export default PeoplePage;
