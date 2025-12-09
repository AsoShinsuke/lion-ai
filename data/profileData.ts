// data/profileData.ts

import { ProfileData } from '../types/profile';

export const profileData: ProfileData = {
  name: "岩下直人",
  title: "代表取締役",
  company: {
    name: "WONQ株式会社",
    url: "https://www.wonq-xr.jp/"
  },
  profileImage: "/images/profile.jpg",
  biography: [
    "WONQ株式会社の代表取締役として、XR技術とAI技術の融合による新しい価値創造に取り組んでいます。",
    "テクノロジーを活用した革新的なソリューションの開発を通じて、社会課題の解決に貢献することを目指しています。",
    "AIにおいては最先端の技術を学習し研修を通して、受講者のスキル向上に貢献しています。"
  ],
  expertise: [
    "XR技術",
    "AI技術",
    "事業開発",
    "技術戦略",
    "イノベーション推進"
  ],
  relatedLinks: [
    {
      name: "WONQ株式会社",
      url: "https://www.wonq-xr.jp/",
      description: "会社公式サイト",
      isExternal: true
    },
    {
      name: "Lion AI",
      url: "https://www.lion-ai.co.jp/",
      description: "WONQ株式会社のAI事業",
      isExternal: true
    } 
  ]
};
