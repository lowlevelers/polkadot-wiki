module.exports = {
  docs: [
    {
      type: "category",
      label: "Explore",
      description: 'Wallets and Apps in the Kusama Ecosystem.',
      link: {
        type: 'generated-index',
        title: 'Explore',
        description: 'Explore Wallets, Apps and Programmes in Polkadot and Kusama ecosystems.',
        slug: '/explore-index',
      },
      items: [
        {
          type: "category",
          label: "Get Started",
          items: [
            "general/kusama/kusama-getting-started",
            "general/kusama/kusama-coc",
            "general/kusama/kusama-claims",
            "general/kusama/kusama-parameters",
            "general/kusama/kusama-timeline",
            "general/kusama/kusama-community",
            "maintain/kusama/maintain-guides-society-kusama",
          ],
        },
        {
          type: "category",
          label: "Wallets",
          description: 'Beginner friendly wallets with advanced features.',
          link: {
            type: 'generated-index',
            title: 'Wallets',
            description: 'Explore the different wallets and applications in the Polkadot and Kusama ecosystems.',
            slug: '/wallets-index',
          },
          items: [
            "general/wallets-and-extensions",
            "general/ledger",
            "general/polkadot-vault",
          ],
        },
        {
          type: "category",
          label: "Apps",
          description: 'Apps for Staking, Governance, Multisigs, NFTs and many more use cases.',
          link: {
            type: 'generated-index',
            title: 'Apps',
            description: 'Explore the different applications in the Polkadot and Kusama ecosystems.',
            slug: '/apps-index',
          },
          items: [
            "general/staking-apps",
            "general/governance-apps",
            "general/multisig-apps",
            "learn/learn-nft-projects",
            "general/parachains-apps",
          ],
        },
        {
          type: "category",
          label: "Dashboards",
          description: 'Dashboards in the Kusama Ecosystem.',
          link: {
            type: 'generated-index',
            title: 'Dashboards',
            description: 'Explore the different dashboards in the Polkadot and Kusama ecosystems.',
            slug: '/dashboards-index',
          },
          items: [
            "general/staking-dashboard",
          ],
        },
        {
          type: "category",
          label: "Community & Contributors",
          description: 'Kusama Community and Wiki Contributors.',
          link: {
            type: 'generated-index',
            title: 'Community & Contributors',
            description: 'Learn about how to participate in the Kusama community and how to contribute to the Kusama Guide.',
            slug: '/community-index',
          },
          items: [
            "general/community",
            "general/contributing",
            "general/contributors",
          ],
        },
        {
          type: "category",
          label: "Programmes",
          description: 'Programmes for Grants, Bounties, Ambassadors and many more inititatives.',
          link: {
            type: 'generated-index',
            title: 'Programmes',
            description: 'Learn about different programmes and initiatives within the Polkadot and Kusama ecosystems.',
            slug: '/programmes-index',
          },
          items: [
            "general/decentralized-futures",
            "general/grants",
            "general/bug-bounty",
            "general/ambassadors",
            "general/builders-program",
            "general/doc-thousand-validators",
            "general/doc-thousand-contributors",
            "general/dev-heroes",
          ],
        },
        "general/metadata",
      ],
    },
    {
      type: "category",
      label: "Learn",
      link: {
        type: 'generated-index',
        title: 'Learn about Kusama',
        description: 'Learn about the technology behind the Kusama ecosystem, and the tools you can use to become a participant of Web3.',
        slug: '/learn-index',
      },
      items: [
        {
          type: "category",
          label: "General",
          description: 'General Information to get started with Kusama and Web3.',
          link: {
            type: 'generated-index',
            title: 'General',
            description: 'General Information to get started with Kusama and Web3.',
            slug: '/general-index',
          },
          items: [
            "general/web3-and-polkadot",
            {
              type: "category",
              label: "Kusama Vision",
              description: "Kusama's Vision revealed by Gavin Wood at Decoded 2023.",
              link: {
                type: 'generated-index',
                title: 'Kusama Vision',
                description: "Kusama's Vision revealed by Gavin Wood at Decoded 2023.",
                slug: '/polkadot-vision-index',
              },
              items: [
                "general/polkadot-v1",
                "general/polkadot-direction",
              ],
            },
            {
              type: "category",
              label: "Stay Safe",
              description: 'Good-practices to Stay Safe while Surfing in Web3.',
              link: {
                type: 'generated-index',
                title: 'Stay Safe',
                description: 'Learn about good-practices to stay safe while surfing in Web3.',
                slug: '/stay-safe-index',
              },
              items: [
                "general/how-to-dyor",
                "general/scams",
                "general/transaction-attacks",
              ],
            },
            "general/start-building",
            "general/research",
            "general/faq",
            "general/glossary",
          ],
        },
        {
          type: "category",
          label: "Basics",
          description: 'Staking, Accounts, Transactions, Tokens and NFTs, and Governance.',
          link: {
            type: 'generated-index',
            title: 'Basic concepts about Kusama',
            description: 'Everything about staking, accounts, OpenGov, treasury, transactions, tokens and NFTs.',
            slug: '/learn-basics-index',
          },
          items: [
            {
              type: "category",
              label: "Accounts",
              description: 'Basic Accounts, Identity, Multi-signature, and Proxies.',
              link: {
                type: 'doc',
                id: "learn/learn-accounts"
              },
              items: [
                "learn/learn-account-abstraction",
                "learn/learn-identity",
                "learn/learn-account-multisig",
                "learn/learn-proxies",
                "learn/learn-proxies-pure",
                "general/kusama/kusama-social-recovery",
              ],
            },
            {
              type: "category",
              label: "Transactions",
              description: 'Extrinsics, Balance Transfers, and Fees.',
              link: {
                type: 'doc',
                id: "learn/learn-transactions",
              },
              items: [
                "learn/learn-transaction-fees",
              ],
            },
            {
              type: "category",
              label: "Staking",
              description: 'Mechanics of Staking.',
              link: {
                type: 'generated-index',
                title: 'Staking on Kusama',
                description: 'Mechanics of Staking on Kusama.',
                slug: '/learn-staking-index',
              },
              items: [
                "learn/learn-staking",
                "maintain/kusama/maintain-guides-how-to-nominate-kusama",
                "learn/learn-nomination-pools",
              ],
            },
            {
              type: "category",
              label: "Kusama OpenGov",
              description: 'Everything about Kusama OpenGov.',
              link: {
                type: 'generated-index',
                title: 'Kusama OpenGov',
                description: 'Everything about Kusama OpenGov.',
                slug: '/learn-polkadot-opengov-index',
              },
              items: [
                "learn/learn-polkadot-opengov",
                "learn/learn-polkadot-opengov-origins",
              ],
            },
            "learn/learn-polkadot-opengov-treasury",
            {
              type: "category",
              label: "Tokens and Assets",
              description: 'DOT Token, Asset Hub, and Teleports.',
              link: {
                type: 'generated-index',
                title: 'Tokens and Assets',
                description: 'Everything about tokens and assets on Kusama.',
                slug: '/learn-assets-index',
              },
              items: [
                "learn/learn-assets",
                "learn/learn-DOT",
                "learn/learn-inflation",
                "learn/learn-teleport",
                "learn/learn-nft",
              ],
            },
            {
              type: "category",
              label: "Components",
              description: 'OpenGov, Treasury, WASM, Runtime Upgrades, and more.',
              link: {
                type: 'generated-index',
                title: 'Components',
                description: 'Key components of the Kusama ecosystem.',
                slug: '/learn-components-index',
              },
              items: [
                "learn/learn-polkadot-host",
                'learn/learn-wasm',
                "learn/learn-runtime-upgrades",
                "learn/learn-consensus",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Advanced",
          description: 'Advanced Concepts & Guides about Accounts, Staking, and NFTs.',
          link: {
            type: 'generated-index',
            title: 'Advanced Concepts',
            description: 'Advanced concepts to better understand Kusama.',
            slug: '/learn-advanced-index',
          },
          items: [
            {
              type: "category",
              label: "Polkadot-JS",
              description: 'Overview of Polkadot-JS.',
              link: {
                type: 'generated-index',
                title: 'Polkadot-JS',
                description: 'Overview of Polkadot-JS.',
                slug: '/learn-polkadotjs-index',
              },
              items: [
                "general/polkadotjs",
                "general/polkadotjs-ui",
                {
                  type: "category",
                  label: "Polkadot-JS Guides",
                  description: 'Polkadot-JS Guides about Staking, Asset Hub, Vault App, and more.',
                  link: {
                    type: 'doc',
                    id: "learn/learn-polkadot-js-guides",
                  },
                  items: [
                    {
                      type: "category",
                      label: "Accounts",
                      description: 'Polkadot-JS Guides about Accounts.',
                      link: {
                        type: 'doc',
                        id: "learn/learn-guides-accounts",
                      },
                      items: [
                        "learn/learn-guides-accounts-multisig",
                        "learn/learn-guides-accounts-proxy",
                        "learn/learn-guides-accounts-proxy-pure",
                      ],
                    },
                    "learn/learn-guides-transfers",
                    {
                      type: "category",
                      label: "Staking",
                      description: 'Polkadot-JS Guides about Staking.',
                      link: {
                        type: 'generated-index',
                        title: 'Polkadot-JS Guides about Staking',
                        description: 'Polkadot-JS Guides about Staking.',
                        slug: '/learn-guides-staking-index',
                      },
                      items: [
                        "learn/learn-guides-staking",
                        "learn/learn-guides-staking-pools",
                      ],
                    },
                    "learn/learn-guides-polkadot-opengov",
                    "learn/learn-guides-treasury",
                    "learn/learn-guides-bounties",
                    "learn/learn-guides-identity",
                    "learn/learn-guides-ledger",
                    "learn/learn-guides-vault",
                    {
                      type: "category",
                      label: "Asset Hub",
                      description: 'Polkadot-JS Guides about the Asset Hub.',
                      link: {
                        type: 'generated-index',
                        title: 'Advanced Guides for Asset Hub',
                        description: 'Polkadot-JS guides about the Asset Hub.',
                        slug: '/learn-guides-assets-index',
                      },
                      items: [
                        "learn/learn-guides-assets-create",
                        "learn/learn-guides-assets-ledger",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Architecture",
              description: "Nominators, Validators, Collators, Parachains, and more.",
              link: {
                type: 'generated-index',
                title: "Kusama's Architecture",
                description: "Everything about Kusama's Architecture.",
                slug: '/learn-architecture-index',
              },
              items: [
                "learn/learn-architecture",
                {
                  type: "category",
                  label: "Network Participants",
                  description: "Participants in the Kusama Ecosystem.",
                  link: {
                    type: 'generated-index',
                    title: "Participants in the Kusama Ecosystem",
                    description: "Learn about collators, nominators and validators.",
                    slug: '/learn-participants-index',
                  },
                  items: [
                    "learn/learn-collator",
                    "learn/learn-nominator",
                    "learn/learn-validator",
                  ],
                },
                {
                  type: "category",
                  label: "Parachains",
                  description: "Parachains' Protocol, Auctions, Crowdloans, and more.",
                  link: {
                    type: 'generated-index',
                    title: "Kusama's Parachains",
                    description: "Everything about Kusama's Parachains.",
                    slug: '/learn-parachains-index',
                  },
                  items: [
                    "learn/learn-parachains",
                    "learn/learn-parachains-protocol",
                    "learn/learn-system-chains",
                    "learn/learn-auction",
                    "learn/learn-crowdloans",
                    "learn/learn-parachains-faq",
                  ],
                },
                "learn/learn-bridges",
                {
                  type: "category",
                  label: "Cross Consensus Messaging (XCM)",
                  description: "Kusama's Cross-Consensus Messaging Format (XCM).",
                  link: {
                    type: 'generated-index',
                    title: "Kusama's XCM",
                    description: "Kusama's Cross-Consensus Messaging Format (XCM).",
                    slug: '/learn-xcm-index',
                  },
                  items: [
                    'learn/learn-xcm',
                    'learn/learn-xcm-pallet',
                    'learn/learn-xcm-usecases',
                    'learn/learn-xcm-transport',
                    'learn/learn-xcvm',
                    'learn/learn-xcm-instructions',
                  ],
                },
              ],
            },
            'learn/learn-account-advanced',
            "learn/learn-staking-advanced",
            "learn/learn-nft-pallets",
            "learn/learn-cryptography",
            'learn/learn-phragmen',
          ],
        },
        {
          type: "category",
          label: "XCM Docs",
          description: "In-depth documentation about the Polkadot's Cross-Chain Messaging (XCM).",
          link: {
            type: 'generated-index',
            title: "XCM Documentation",
            description: "In-depth documentation about the Polkadot's Cross-Chain Messaging (XCM).",
            slug: 'learn/xcm',
          },
          items: [
            "learn/xcm/learn-xcm-docs-intro",
            {
              type: "category",
              label: "Overview",
              description: "Overview of the XCM Documentation.",
              link: {
                type: 'generated-index',
                title: "Overview",
                description: "Overview of the XCM Documentation.",
                slug: '/learn/xcm/overview',
              },
              items: [
                "learn/xcm/overview/learn-xcm-docs-overview-summary",
                "learn/xcm/overview/learn-xcm-docs-overview-intro",
                "learn/xcm/overview/learn-xcm-docs-overview-format",
                "learn/xcm/overview/learn-xcm-docs-overview-xcvm",
                "learn/xcm/overview/learn-xcm-docs-overview-architecture",
              ],
            },
            {
              type: "category",
              label: "Quickstart",
              description: "Start Diving into XCM.",
              link: {
                type: 'generated-index',
                title: "Quickstart",
                description: "Start Diving into XCM.",
                slug: '/learn/xcm/quickstart',
              },
              items: [
                "learn/xcm/quickstart/learn-xcm-docs-quickstart-summary",
                "learn/xcm/quickstart/learn-xcm-docs-quickstart-simulator",
                "learn/xcm/quickstart/learn-xcm-docs-quickstart-first-look",
              ],
            },
            {
              type: "category",
              label: "Fundamentals",
              description: "Fundamental Concepts about XCM.",
              link: {
                type: 'generated-index',
                title: "Fundamentals",
                description: "Fundamental Concepts about XCM.",
                slug: '/learn/xcm/fundamentals',
              },
              items: [
                "learn/xcm/fundamentals/learn-xcm-docs-fundamentals-summary",
                {
                  type: "category",
                  label: "MultiLocation",
                  description: "The MultiLocation Type.",
                  link: {
                    type: 'generated-index',
                    title: "MultiLocation",
                    description: "The MultiLocation Type.",
                    slug: '/learn/xcm/fundamentals/multilocation',
                  },
                  items: [
                    "learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-summary",
                    "learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-junctions",
                    "learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-example",
                  ],
                },
                "learn/xcm/fundamentals/learn-xcm-docs-fundamentals-multiasset",
                "learn/xcm/fundamentals/learn-xcm-docs-fundamentals-xcvm",
                "learn/xcm/fundamentals/learn-xcm-docs-fundamentals-fees",
              ],
            },
            {
              type: "category",
              label: "A Journey through XCM",
              description: "A Practical Introduction to the XCM Features",
              link: {
                type: 'generated-index',
                title: "A Journey through XCM",
                description: "A Practical Introduction to the XCM Features.",
                slug: '/learn/xcm/journey',
              },
              items: [
                "learn/xcm/journey/learn-xcm-docs-journey-summary",
                {
                  type: "category",
                  label: "Transfers",
                  description: "Transferring Assets between Consensus Systems with XCM.",
                  link: {
                    type: 'generated-index',
                    title: "Transfers",
                    description: "Transferring Assets between Consensus Systems with XCM.",
                    slug: '/learn/xcm/journey/transfers',
                  },
                  items: [
                    "learn/xcm/journey/transfers/learn-xcm-docs-transfers-summary",
                    "learn/xcm/journey/transfers/learn-xcm-docs-transfers-teleport",
                    "learn/xcm/journey/transfers/learn-xcm-docs-transfers-reserve",
                  ],
                },
                "learn/xcm/journey/learn-xcm-docs-journey-fees",
                "learn/xcm/journey/learn-xcm-docs-journey-transact",
                "learn/xcm/journey/learn-xcm-docs-journey-origin",
                "learn/xcm/journey/learn-xcm-docs-journey-register",
                "learn/xcm/journey/learn-xcm-docs-journey-holding",
                "learn/xcm/journey/learn-xcm-docs-journey-assets",
                "learn/xcm/journey/learn-xcm-docs-journey-expectations",
                "learn/xcm/journey/learn-xcm-docs-journey-queries",
                "learn/xcm/journey/learn-xcm-docs-journey-version",
                "learn/xcm/journey/locks/learn-xcm-docs-journey-locks",
                "learn/xcm/journey/learn-xcm-docs-journey-channels",
              ],
            },
            "learn/xcm/executor_config/learn-xcm-docs-config-deep-dive",
            "learn/xcm/learn-xcm-docs-testing",
            {
              type: "category",
              label: "References",
              description: "XCVM Registers and Glossary",
              link: {
                type: 'generated-index',
                title: "References",
                description: "References.",
                slug: '/learn/xcm/references',
              },
              items: [
                "learn/xcm/reference/learn-xcm-docs-reference-xcvm-registers",
                "learn/xcm/reference/learn-xcm-docs-reference-glossary",
              ],
            },
          ],
        },
        "learn/learn-video-tutorials",
        {
          type: "category",
          label: "Future Implementations",
          description: "Implementations that will be deployed on Kusama.",
          link: {
            type: 'generated-index',
            title: "Future Implementations",
            description: "Implementations that will be deployed on Kusama.",
            slug: '/learn-future-implementations-index',
          },
          items: [
            'learn/learn-spree',
            "learn/learn-parathreads",
            "learn/learn-async-backing",
            "learn/learn-sassafras",
          ],
        },
        {
          type: "category",
          label: "Archive",
          description: "Implementations no longer live on Kusama.",
          link: {
            type: 'generated-index',
            title: "Archive",
            description: "Implementations no longer live on Kusama.",
            slug: '/learn-archive-index',
          },
          items: [
            "learn/learn-governance",
            "learn/learn-treasury",
            "learn/learn-launch",
            "learn/learn-redenomination",
            "learn/learn-controller",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Validate",
      items: [
        "maintain/kusama/maintain-guides-how-to-validate-kusama",
        "maintain/maintain-guides-how-to-stop-validating",
        "maintain/doc-maintain-guides-validator-community",
      ],
    },
    {
      type: "category",
      label: "Build",
      items: [
        "build/build-index",
        "maintain/maintain-endpoints",
        {
          type: "category",
          label: "Development Guide",
          items: [
            "build/build-guide",
            "build/build-parachains",
            "build/build-storage",
            "build/build-smart-contracts",
            "build/build-oracle",
            "build/build-data",
            "build/build-light-clients",
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: [
            "build/build-tools-index",
            'build/build-open-source'
          ],
        },
        {
          type: "category",
          label: "Resources",
          items: ["build/build-hackathon"],
        },
      ],
    }, 
    {
      type: "category",
      label: "What to Break",
      items: [
        "maintain/maintain-errors",
        "general/kusama/kusama-bug-bounty",
        "general/kusama/kusama-adversarial-cheatsheet",
      ],
    },
  ],
};
