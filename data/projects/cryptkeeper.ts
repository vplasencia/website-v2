import { ProjectInterface } from "@/lib/types"

const description = `
CryptKeeper is a browser extension that generates Semaphore and RLN proofs for websites, providing a secure and portable solution for managing anonymous identity secrets across different applications. It simplifies the integration of zero-knowledge (ZK) identities and proofs into applications, allowing developers to focus on building the front-end and logic of their applications. By handling complex aspects of cryptography, circuits, caching, and storage, CryptKeeper enables users to interact with decentralized applications (dapps) without revealing their private identity secrets. It is aimed at building secure community standards for the growing ZK ecosystem.
`

export const cryptkeeper: ProjectInterface = {
  id: "cryptkeeper",
  section: "pse",
  projectStatus: "archived",
  image: "cryptkeeper.webp",
  name: "CryptKeeper",
  tldr: "A browser extension for secure, portable anonymous identity management across applications.",
  description,
  links: {
    github: "https://github.com/CryptKeeperZK",
  },
  tags: {
    keywords: ["Anonymity/privacy", "Social", "Identity"],
    themes: ["build"],
    types: ["Application", "Infrastructure/protocol", "Lego sets/toolkits"],
    builtWith: ["semaphore", "rln"],
  },
}
