import { TestmonialProps } from "@/stories/Kdan Music Book/Components/Testmonial";
import AvatarSrcList from "./Avatar";
import { faker } from "@faker-js/faker";

const TestmonialInfo: TestmonialProps[] = [
  {
    testmonialText: `The sounds from WavesCo is great and it really helps our team to save time and production costs.`,
    avatarSrc: AvatarSrcList[0],
    userName: `Anne Joyce`,
    userJobTitle: `Video editor at Dude Perfect`
  },
  {
    testmonialText: `WavesCo was a great choice for our team for film production, the quality is amazingly great.`,
    avatarSrc: AvatarSrcList[1],
    userName: `Edward Sann`,
    userJobTitle: `Head of Video editor at Netflix`
  },
  {
    testmonialText: `Perfect way to get best quality sound effects for youtube videos. Thanks to WavesCo team.`,
    avatarSrc: AvatarSrcList[2],
    userName: `Ronn D.`,
    userJobTitle: `Video Editor at PewDiePie`
  },

  ...[...Array(6)].map((_, index) => ({
    testmonialText: `${faker.lorem.sentences(1)}`,
    avatarSrc: AvatarSrcList[index + 3],
    userName: `${faker.person.fullName({sex: 'male'})}`,
    userJobTitle: `${faker.person.jobTitle()}`
  }))

];

export default TestmonialInfo;