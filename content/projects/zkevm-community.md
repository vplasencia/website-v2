---
id: "zkevm-community"
name: "zkEVM Community Edition"
image: "zkevm.jpg"
section: "pse"
projectStatus: "inactive"
category: "devtools"
tldr: "A zero-knowledge proof mechanism for Ethereum block verification."
tags:
  keywords: ["Scaling"]
  themes: ["build"]
  types: ["Infrastructure/protocol", "Lego sets/toolkits"]
  builtWith: ["halo2", "rust", "geth"]
links:
  github: "https://github.com/privacy-scaling-explorations/zkevm-circuits"
---

zkEVM Community Edition is a project aimed at validating Ethereum blocks using zero-knowledge proofs. It is designed to be fully compatible with Ethereum's EVM and serves two primary goals. First, it enables the creation of a layer 2 network (zkRollup) compatible with the Ethereum ecosystem, which uses zero-knowledge proofs to validate blocks, thus enhancing scalability. Second, it allows the generation of zero-knowledge proofs for blocks from the existing layer 1 Ethereum network, enabling light clients to quickly synchronize many blocks with low resource consumption while ensuring block correctness without needing trust in external parties.
