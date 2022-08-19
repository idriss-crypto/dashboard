// for resolving part -> export to separate file?
// ToDo: use IDriss library
var walletTags = {
    evm: {
        ETH: {
            "Metamask ETH": "5d181abc9dcb7e79ce50e93db97addc1caf9f369257f61585889870555f8c321",
            "Binance ETH": "4b118a4f0f3f149e641c6c43dd70283fcc07eacaa624efc762aa3843d85b2aba",
            "Coinbase ETH": "92c7f97fb58ddbcb06c0d5a7cb720d74bc3c3aa52a0d706e477562cba68eeb73",
            "Exchange ETH": "ec72020f224c088671cfd623235b59c239964a95542713390a2b6ba07dd1151c",
            "Private ETH": "005ba8fbc4c85a25534ac36354d779ef35e0ee31f4f8732b02b61c25ee406edb",
            "Essentials ETH": "3ea9415b82f0ee7db933aab0be377ee1c1a405969d8b8c2454bcce7372a161c2",
            "Rainbow ETH": "992335db5f54ef94a5f23be8b925ed2529b044537c19b59643d39696936b6d6c",
            "Argent ETH": "682614f9b037714bbf001db3a8d6e894fbdcf75cbbb9dea5a42edce33e880072",
            "Tally ETH": "f368de8673a59b860b71f54c7ba8ab17f0b9648ad014797e5f8d8fa9f7f1d11a",
            "Trust ETH": "df3d3f0233e396b2b27c3943269b10ecf2e7c1070a485e1b6b8f2201cb23cb52",
            "Public ETH": "9306eda974cb89b82c0f38ab407f55b6d124159d1fa7779f2e088b2b786573c1",
        },
        BNB: {
            "Metamask BNB": "3bee8eefc6afe6b4f7dbcc024eb3ad4ceaa5e458d34b7877319f2fe9f676e983",
            "Essentials BNB": "639c9abb5605a14a557957fa72e146e9abf727be32e5149dca377b647317ebb9",
        },
        USDT: {
            "Metamask USDT": "74a3d8986c81769ed3bb99b773d66b60852f7ee3fa0d55a6a144523116c671c1",
            "Binance USDT": "77c27c19cc85e24b1d4650800cc4b1bc607986dd3e78608435cececd31c35015",
            "Coinbase USDT": "f2faabf9d133f31a13873ba8a15e676e063a730898ffadfcb0077f723260f563",
            "Exchange USDT": "683e7b694b374ce0d81ba525361fa0c27fff7237eb12ec41b6e225449d5702b9",
            "Private USDT": "8c9a306a7dc200c52d32e3c1fcbf2f65e8037a68127b81807e8e58428004bc57",
            "Essentials USDT": "74dcb573a5c63382484f597ae8034a6153c011e291c01eb3da40e9d83c436a9a",
        },
        USDC: {
            "Metamask USDC": "6f763fea691b1a723ef116e98c02fae07a4397e1a2b4b4c749d06845fa2ff5e4",
            "Binance USDC": "7d2b0e0ee27a341da84ce56e95eb557988f9d4ff95fe452297fc765265bb27a2",
            "Coinbase USDC": "6fe7c1a2fdd154e0b35283598724adee9a5d3b2e6523787d8b6de7cd441f15ca",
            "Exchange USDC": "8c4a231c47a4cfa7530ba4361b6926da4acd87f569167b8ba55b268bf99640d0",
            "Private USDC": "54c9da06ab3d7c6c7f813f36491b22b7f312ae8f3b8d12866d35b5d325895e3e",
            "Essentials USDC": "23a66df178daf25111083ee1610fb253baf3d12bd74c6c2aae96077558e3737a",
        },
        ELA: {
            "Essentials ELA SC": "c17c556467fe7c9fe5667dde7ca8cdbca8a24d0473b9e9c1c2c8166c1f355f6c",
        },
        MATIC: {
            "Essentials MATIC": "336fb6cdd7fec196c6e66966bd1c326072538a94e700b8bc1111d1574b8357ba",
        },
        BTC: {
            "Essentials BTC SC": "39d18497a64591bb1b061940309c453495398d00f9d9deab8b2c1e0979e4cbe7",
        },
        ERC20: {
            "ERC20": "63d95e64e7caff988f97fdf32de5f16624f971149749c90fbc7bbe44244d3ced",
        },
    },
    btc: {
        BTC: {
            "Binance BTC": "450efeca15651e50995ed494ac24a945e61d67f60bed0dbb3b2d8d7df122a8ca",
            "Coinbase BTC": "b3c77df93f865dd21a6196266d5c291adad15c7db9c81ddc78409a22f36ebe84",
            "Exchange BTC": "a3f104cace8d66ed9971b19f749a821ae4397349155ea1a8724451c3e680335b",
            "Private BTC": "a7d3f51b26dad11f5f4842d29f2fc419a48e3471bdec0a2c713c7d18d3143d65",
        },
        ELA: {
            "Essentials ELA": "35ae820c72397977701524ee610e7ef2ca3d64539ccdc65e5198470d8e49eccb",
        },
    },
    sol: {
        SOL: {
            "Solana SOL": "62994eac84217f90c44d7acf962861f044a5f2e653400c154a8bcbf114da16fb",
            "Coinbase SOL": "b5a72b6402de8a0fa649e23c81ae165dcfcce22c960a4a67a218243a73f49b1f",
            "Trust SOL": "70190458e6435ad1e8f575ac60a7d8542ae5a4927aba336789de377a47b839d4",
            "Binance SOL": "19cd4e6feb1efb40eb6506fb448a22cefeb63690ecaa35fee65914607adee606",
            "Phantom SOL": "88f5c6ddb68a1cee77543f2de2788ade913b87bbac1c38d354707bc8ee3a0328",
        },
    },
};

walletTagsReverse = {
    "Metamask ETH": "MM_ETH",
    "Binance ETH": "BINANCE_ETH",
    "Coinbase ETH": "COINBASE_ETH",
    "Exchange ETH": "EXCHANGE_ETH",
    "Private ETH": "PRIVATE_ETH",
    "ERC20": "ERC20",
    "Essentials ETH": "ESSENTIALS_ETH",
    "Rainbow ETH": "RAINBOW_ETH",
    "Argent ETH": "ARGENT_ETH",
    "Tally ETH": "TALLY_ETH",
    "Trust ETH": "TRUST_ETH",
    "Metamask USDT": "METAMASK_USDT",
    "Binance USDT": "BINANCE_USDT",
    "Coinbase USDT": "COINBASE_USDT",
    "Exchange USDT": "EXCHANGE_USDT",
    "Private USDT": "PRIVATE_USDT",
    "Essentials USDT": "ESSENTIALS_USDT",
    "Metamask USDC": "METAMASK_USDC",
    "Binance USDC": "BINANCE_USDC",
    "Coinbase USDC": "COINBASE_USDC",
    "Exchange USDC": "EXCHANGE_USDC",
    "Private USDC": "PRIVATE_USDC",
    "Essentials USDC": "ESSENTIALS_USDC",
    "Metamask BNB": "METAMASK_BNB",
    "Essentials BNB": "ESSENTIALS_BNB",
    "Essentials ELA SC": "ESSENTIALS_ELA_SC",
    "Essentials MATIC": "ESSENTIAL_MATIC",
    "Public ETH": "TWITTER"
};

const regPh = /^(\+\(?\d{1,4}\s?)\)?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;
const regM = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const regT = /^@[a-zA-Z0-9_]{1,15}$/;

function lowerFirst(string_) {
    return string_.charAt(0).toLowerCase() + string_.slice(1);
}

function convertPhone(string_) {
    // allow for letters because secret word can follow phone number
    return "+" + string_.replace(/[^\da-zA-Z]/, "")
}

async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}

//Switching between management and rewards
function manageIDrissTab() {

    document.getElementById("ManageIDrissContent").style.display = "";
    document.getElementById("RewardsContent").style.display = "none";

    document.getElementById("ButtonManageIDrissTab").classList.add("bg-indigo-50");
    document.getElementById("ButtonManageIDrissTab").classList.add("text-[#5865F2]");
    document.getElementById("ButtonManageIDrissTab").classList.remove("text-gray-500");

    document.getElementById("ButtonRewardsTab").classList.remove("bg-indigo-50");
    document.getElementById("ButtonRewardsTab").classList.remove("text-[#5865F2]");
    document.getElementById("ButtonRewardsTab").classList.add("text-gray-500");

    document.getElementById("HeaderContent").innerHTML = 'Manage IDriss';
}

//Switching between management and rewards
function rewardsTab() {
    document.getElementById("ManageIDrissContent").style.display = "none";
    document.getElementById("RewardsContent").style.display = "";

    document.getElementById("ButtonManageIDrissTab").classList.remove("bg-indigo-50");
    document.getElementById("ButtonManageIDrissTab").classList.remove("text-[#5865F2]");
    document.getElementById("ButtonManageIDrissTab").classList.add("text-gray-500");

    document.getElementById("ButtonRewardsTab").classList.add("bg-indigo-50");
    document.getElementById("ButtonRewardsTab").classList.add("text-[#5865F2]");
    document.getElementById("ButtonRewardsTab").classList.remove("text-gray-500");

    document.getElementById("HeaderContent").innerHTML = 'Rewards';
}

//NAV BAR
//Connecting wallet
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;
const WalletLink = window.WalletLink;
const Fortmatic = window.Fortmatic;

// set default web3 + provider for frontend checks w/o connecting wallet
const defaultWeb3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/polygon"));

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;

// web3 for chosen wallet
let web3;

// Address of the selected account
let account;

// define initial input
let firstInput;

// reward page points
let totalPoints;

// Load our smart contract
async function loadContract() {
    return await new defaultWeb3.eth.Contract(
        [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"}],"name":"AdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"}],"name":"AdminDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Decrement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"hash","type":"string"}],"name":"IDrissAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"hash","type":"string"}],"name":"IDrissDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousIDrissOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newIDrissOwner","type":"address"}],"name":"IDrissOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Increment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"NewPrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"IDrissOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adminAddress","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"},{"internalType":"string","name":"hashID","type":"string"},{"internalType":"string","name":"address_","type":"string"},{"internalType":"address","name":"ownerAddress","type":"address"}],"name":"addIDriss","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"},{"internalType":"string","name":"hashID","type":"string"},{"internalType":"string","name":"address_","type":"string"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"ownerAddress","type":"address"}],"name":"addIDrissToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"countAdding","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"countDeleting","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adminAddress","type":"address"}],"name":"deleteAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"}],"name":"deleteIDriss","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"}],"name":"getIDriss","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"payDates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferContractOwnership","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferIDrissOwnership","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContract","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "0x2EcCb53ca2d4ef91A79213FDDF3f8c2332c2a814"
    );
}

// not used anymore
async function loadContractLocal(web3) {
    return await new web3.eth.Contract(
        [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"}],"name":"AdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"}],"name":"AdminDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Decrement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"hash","type":"string"}],"name":"IDrissAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"hash","type":"string"}],"name":"IDrissDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousIDrissOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newIDrissOwner","type":"address"}],"name":"IDrissOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Increment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"NewPrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"IDrissOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adminAddress","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"},{"internalType":"string","name":"hashID","type":"string"},{"internalType":"string","name":"address_","type":"string"},{"internalType":"address","name":"ownerAddress","type":"address"}],"name":"addIDriss","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"},{"internalType":"string","name":"hashID","type":"string"},{"internalType":"string","name":"address_","type":"string"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"ownerAddress","type":"address"}],"name":"addIDrissToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"countAdding","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"countDeleting","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adminAddress","type":"address"}],"name":"deleteAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"}],"name":"deleteIDriss","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"}],"name":"getIDriss","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"payDates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferContractOwnership","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"hashPub","type":"string"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferIDrissOwnership","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenContract","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "0x2EcCb53ca2d4ef91A79213FDDF3f8c2332c2a814"
    );
}

async function loadContractReverse(web3) {
    return await new web3.eth.Contract(
        [{"inputs":[{"internalType":"address","name":"adminAddress","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_tag","type":"string"},{"internalType":"string","name":"_tagHash","type":"string"}],"name":"addWalletTag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adminAddress","type":"address"}],"name":"deleteAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deleteReverseMapping","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_tag","type":"string"}],"name":"deleteWalletTag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_handle","type":"string"},{"internalType":"string","name":"_walletTag","type":"string"}],"name":"registerReverseIDriss","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferContractOwnership","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IDrissAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"reverseIDriss","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"walletTags","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],
        "0x561f1b5145897A52A6E94E4dDD4a29Ea5dFF6f64"
    );
}

// Contract to interact with for payment
let contract;

let TallyOpts = {
    "custom-tally": {
        display: {
            logo: "../static/images/tally.svg",
            name: "Tally",
            description: "Coming Soon",
        },
        package: true,
        connector: async () => {
            if (!isTallyInstalled()) {
                    window.open("https://tally.cash/community-edition", '_blank'); // <-- LOOK HERE
                    throw new Error("Tally not supported yet.");
                }

                let provider = null;
                if (typeof window.ethereum !== 'undefined') {

                    provider = window.ethereum
                    try {
                        await provider.request({ method: 'eth_requestAccounts' });
                    } catch (error) {
                        throw new Error("User Rejected");
                    }
                } else {
                    throw new Error("No Tally Wallet found");
                }
                console.log("Tally provider", provider);
                return provider;
        },
    },
};

let WalletConnectOpts = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: {
                137: "https://polygon-rpc.com/",
            },
            chainId: 137,
        },
    },
};

let MetaMaskOpts = {
    "custom-metamask": {
        display: {
            logo: "../static/images/metamask-logo.svg",
            name: "MetaMask",
            description: "Connect to your MetaMask Wallet",
        },
        package: true,
        connector: async () => {
            if (!isMetaMaskInstalled()) {
                window.open("https://metamask.io/download/", "_blank"); // <-- LOOK HERE
                return;
            }

            let provider = null;
            if (typeof window.ethereum !== "undefined") {
                let providers = window.ethereum.providers;
                if (providers){
                    provider = providers.find(p => p.isMetaMask);
                } else {
                    provider = window.ethereum
                }
                try {
                    await provider.request({ method: "eth_requestAccounts" });
                } catch (error) {
                    throw new Error("User Rejected");
                }
            } else {
                throw new Error("No MetaMask Wallet found");
            }
            console.log("MetaMask provider", provider);
            return provider;
        },
    },
};

let WalletLinkOpts = {
    "custom-walletlink": {
        display: {
            logo: "../static/images/coinbase.svg",
            name: "Coinbase",
            description: "Scan with WalletLink to connect",
        },
        options: {
            appName: "IDriss", // Your app name
            rpc: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            chainId: 1,
        },
        package: WalletLink,
        connector: async (_, options) => {
            const { appName, networkUrl, chainId } = options;
            const walletLink = new WalletLink({
                appName,
            });
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
            await provider.enable();
            return provider;
        },
    },
};

let customNetworkOptions = {
    rpcUrl: "https://rpc-mainnet.maticvigil.com/",
    chainId: 137
}

let providerOptionsFM = {
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: "pk_live_05E291BB168EC551", // required
      network: customNetworkOptions // if we don't pass it, it will default to localhost:8454
    }
  }
};

async function connectWallet() {
    const providerOptions = {
        ...WalletConnectOpts,
        ...WalletLinkOpts,
        ...providerOptionsFM
    }

    if (deviceType() === "desktop") {
        Object.assign(providerOptions, MetaMaskOpts);
        Object.assign(providerOptions, TallyOpts);
    }

    web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: true, // optional. For MetaMask / Brave / Opera.
    });

    try {
        console.log("Trying to connect!");
        document.getElementsByClassName("web3modal-modal-lightbox")[0].style.zIndex = "100";
        provider = await web3Modal.connect();
        web3 = new Web3(provider);
        console.log("Connected!");
        accounts = await web3.eth.getAccounts();
        account = accounts[0];
        console.log(account)
        document.getElementById("account").innerHTML = "(".concat(account.substring(0,6)).concat("...").concat(account.substr(-4)).concat(")");
        document.getElementById("account2").innerHTML = "(".concat(account.substring(0,6)).concat("...").concat(account.substr(-4)).concat(")");
        document.getElementById("GreenDot").style.display = "";
        document.getElementById("GreenDot2").style.display = "";
        document.getElementById("connectDesktop").value = "Disconnect Wallet";
        document.getElementById("connectDesktop").onclick = function() { disconnectWallet(); }
        document.getElementById("connectMobile").value = "Disconnect Wallet";
        document.getElementById("connectMobile").onclick = function() { disconnectWallet(); }
    } catch(e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
    // Subscribe to accounts change
    provider.on("accountsChanged", async (accounts) => {
        if (accounts.length > 0) {
            account = accounts[0];
            document.getElementById("account").innerHTML = "(".concat(account.substring(0,6)).concat("...").concat(account.substr(-4)).concat(")");
            console.log("Account changed")
            console.log(account)
            checkOwnership();
        } else {
            disconnectWallet();
        }
    });

    // Subscribe to chainId change
    // Identify action
    provider.on("chainChanged", (chainId) => {
        console.log("Chain changed")
    });

    checkOwnership();
}

async function disconnectWallet() {

  console.log("Killing the wallet connection", provider);

  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  document.getElementById("connectDesktop").value = "Connect Wallet";
  document.getElementById("connectMobile").value = "Connect Wallet";
  document.getElementById("GreenDot").style.display = "none";
  document.getElementById("GreenDot2").style.display = "none";
  document.getElementById("connectDesktop").onclick = function() { connectWallet(); }
  document.getElementById("connectMobile").onclick = function() { connectWallet(); }
  document.getElementById("account").innerHTML = "";
  document.getElementById("account2").innerHTML = "";
  account = undefined;
  await checkOwnership();
}

//POPUP

//Adding given IDriss to the dashboard + checking rewards + closing the popup
async function addIDriss() {
    try {
        document.getElementById("ButtonAddIDriss").onclick = "";
        document.getElementById("Spinner1").style.display = "";
        document.getElementById("ButtonSpinner1").innerHTML = "";
        let inputString = document.getElementById("InputIDriss").value;
        document.getElementById("firstInput").innerText = inputString;
        res = await simpleResolve(inputString);
        document.getElementById("Spinner1").style.display = "block";
        document.getElementById("ButtonSpinner1").innerHTML = "Add";
        console.log(res)
        if (Object.values(res.result).length > 0) {
            document.getElementById("PopupAddIDriss").style.display = "none";
            document.getElementById("AddedIDrissName").innerHTML = inputString;
            document.getElementById("AddedIDrissNameRewards"). innerHTML = inputString;
            let wrapper = document.getElementById("WrapperAllResolved");
            for (let [tag_, resultData] of Object.entries(res.result)) {
                xmlns = "http://www.w3.org/2000/svg"
                let singleWrapper = document.createElement('div')
                singleWrapper.className = 'lg:flex lg:items-center lg:justify-between mt-4'
                singleWrapper.id = resultData[0]
                let inner1 = document.createElement('div')
                inner1.className = 'flex-1 min-w-0'
                let addressWrapper = document.createElement('h2')
                addressWrapper.className = 'text-xl break-all font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate'
                let addressSpan = document.createElement('span')
                addressSpan.textContent = resultData[1]
                addressWrapper.append(addressSpan)
                let inner2 = document.createElement('div')
                inner2.className = 'mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6'
                let tagWrapper = document.createElement('div')
                tagWrapper.className = 'mt-2 flex items-center text-sm text-gray-500'
                let tagColor = document.createElementNS(xmlns, "svg")
                tagColor.setAttributeNS(null, "fill", "currentColor")
                tagColor.setAttributeNS(null, "viewBox", "0 0 20 20")
                tagColor.setAttribute("class", 'h-5 w-5')
                let tagColorPath = document.createElementNS(xmlns, 'path')
                tagColorPath.setAttribute("d", "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z")
                tagColor.append(tagColorPath)
                tagWrapper.append(tagColor)
                let tagSpan = document.createElement('span')
                tagSpan.textContent = tag_
                tagWrapper.append(tagSpan)

                let reverseWrapper = document.createElement('div')
                reverseWrapper.className = 'mt-2 flex items-center text-sm text-gray-500'
                let reverseColor = document.createElementNS(xmlns, "svg")
                reverseColor.setAttributeNS(null, "fill", "currentColor")
                reverseColor.setAttributeNS(null, "viewBox", "0 0 20 20")
                reverseColor.setAttribute("class", 'h-5 w-5')
                let reverseColorPath = document.createElementNS(xmlns, 'path')
                reverseColorPath.setAttribute("d", "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z")
                reverseColorPath.setAttribute("clip-rule", "evenodd")
                reverseColorPath.setAttribute("fill-rule", "evenodd")
                reverseColor.append(reverseColorPath)
                reverseWrapper.append(reverseColor)
                let reverseSpan = document.createElement('span')
                reverseWrapper.append(reverseSpan)

                let reverseTemp = await checkReverse(resultData[1])
                console.log(reverseTemp)

                if (reverseTemp) {
                    reverseSpan.textContent = "Reverse Record On"
                    reverseColor.setAttribute("class", "h-5 w-5 text-[#11dd74]")
                } else {
                   reverseSpan.textContent = "Reverse Record Off"
                    reverseColor.setAttribute("class", "h-5 w-5 text-[#e34234]")
                }

                let ownerWrapper = document.createElement('div')
                ownerWrapper.className = 'mt-2 flex items-center text-sm text-gray-500'
                ownerWrapper.setAttribute("onmouseover", "document.getElementById(\""+resultData[0].slice(0, 10)+"\").style.display = 'block';")
                ownerWrapper.setAttribute("onmouseout", "document.getElementById(\""+resultData[0].slice(0, 10)+"\").style.display = 'none';")
                let ownerColor = document.createElementNS(xmlns, "svg")
                ownerColor.setAttributeNS(null, "fill", "currentColor")
                ownerColor.setAttributeNS(null, "viewBox", "0 0 20 20")
                ownerColor.setAttribute("class", 'h-5 w-5')
                let ownerColorPath = document.createElementNS(xmlns, 'path')
                ownerColorPath.setAttribute("d", "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z")
                ownerColorPath.setAttribute("clip-rule", "evenodd")
                ownerColorPath.setAttribute("fill-rule", "evenodd")
                ownerColor.append(ownerColorPath)
                ownerWrapper.append(ownerColor)
                let ownerSpan = document.createElement('span')
                ownerSpan.textContent = "Owner address"
                ownerWrapper.append(ownerSpan)
                let ownerAddressWrapper = document.createElement('div')
                ownerAddressWrapper.id = resultData[0].slice(0, 10)
                ownerAddressWrapper.className = 'text-sm hidden tooltipOwner'
                let ownerAddressSpan = document.createElement('span')
                ownerAddressSpan.textContent = resultData[3]
                ownerAddressWrapper.append(ownerAddressSpan)
                ownerWrapper.append(ownerAddressWrapper)
                let creationWrapper = document.createElement('div')
                creationWrapper.className = 'mt-2 flex items-center text-sm text-gray-500'
                let creationColor = document.createElementNS(xmlns, "svg")
                creationColor.setAttributeNS(null, "fill", "currentColor")
                creationColor.setAttributeNS(null, "viewBox", "0 0 20 20")
                creationColor.setAttribute("class", 'h-5 w-5')
                let creationColorPath = document.createElementNS(xmlns, 'path')
                creationColorPath.setAttribute("d", "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z")
                creationColorPath.setAttribute("clip-rule", "evenodd")
                creationColorPath.setAttribute("fill-rule", "evenodd")
                creationColor.append(creationColorPath)
                creationWrapper.append(creationColor)
                let creationSpan = document.createElement('span')
                creationSpan.textContent = "Registered " + resultData[2]
                creationWrapper.append(creationSpan)
                inner2.append(tagWrapper)
                inner2.append(reverseWrapper)
                inner2.append(ownerWrapper)
                inner2.append(creationWrapper)
                inner1.append(addressWrapper)
                inner1.append(inner2)
                let buttonWrapper = document.createElement('div')
                buttonWrapper.className = 'mt-5 flex lg:mt-0 lg:ml-4'

                let buttonReverse = document.createElement('button')
                buttonReverse.type = "button"

                if (reverseTemp) {
                    buttonReverse.onclick = function() { deleteReverse(resultData[1]); }
                } else {
                    buttonReverse.onclick = function() { addReverse(tag_, resultData[0]); }
                }
                buttonReverse.className = 'inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                let buttonReverseColor = document.createElementNS(xmlns, "svg")
                buttonReverseColor.setAttributeNS(null, "fill", "currentColor")
                buttonReverseColor.setAttributeNS(null, "viewBox", "0 0 20 20")
                buttonReverseColor.setAttributeNS(null, "aria-hidden", "true")
                buttonReverseColor.setAttribute("class", '-ml-1 mr-2 h-5 w-5 text-gray-500')
                let buttonReverseColorPath = document.createElementNS(xmlns, 'path')
                buttonReverseColorPath.setAttribute("d", "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z")
                buttonReverseColor.append(buttonReverseColorPath)
                buttonReverse.append(buttonReverseColor)
                let buttonReverseSpan = document.createElement('span')
                if (reverseTemp) {
                    buttonReverseSpan.textContent = "Remove Rev. Record"
                } else {
                    buttonReverseSpan.textContent = "Add Reverse Record"
                }
                buttonReverse.append(buttonReverseSpan)

                let buttonOwner = document.createElement('button')
                buttonOwner.type = "button"
                buttonOwner.onclick = function() { changeOwner(resultData[0]); }
                buttonOwner.className = 'ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                let buttonOwnerColor = document.createElementNS(xmlns, "svg")
                buttonOwnerColor.setAttributeNS(null, "fill", "currentColor")
                buttonOwnerColor.setAttributeNS(null, "viewBox", "0 0 20 20")
                buttonOwnerColor.setAttributeNS(null, "aria-hidden", "true")
                buttonOwnerColor.setAttribute("class", '-ml-1 mr-2 h-5 w-5 text-gray-500')
                let buttonOwnerColorPath = document.createElementNS(xmlns, 'path')
                buttonOwnerColorPath.setAttribute("d", "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z")
                buttonOwnerColor.append(buttonOwnerColorPath)
                buttonOwner.append(buttonOwnerColor)
                let buttonOwnerSpan = document.createElement('span')
                buttonOwnerSpan.textContent = "Change Owner"
                buttonOwner.append(buttonOwnerSpan)
                let buttonDeleteWrapper = document.createElement('span')
                buttonDeleteWrapper.className = 'ml-3'
                let buttonDelete = document.createElement('button')
                buttonDelete.type = "button"
                buttonDelete.onclick = function() { deleteIDriss(resultData[0], resultData[1]); }
                buttonDelete.className = 'ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                let buttonDeleteColor = document.createElementNS(xmlns, "svg")
                buttonDeleteColor.setAttributeNS(null, "fill", "currentColor")
                buttonDeleteColor.setAttributeNS(null, "viewBox", "0 0 20 20")
                buttonDeleteColor.setAttribute("class", 'h-5 w-5 text-gray-500')
                let buttonDeleteColorPath = document.createElementNS(xmlns, 'path')
                buttonDeleteColorPath.setAttribute("d", "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z")
                buttonDeleteColorPath.setAttribute("fill-rule", "evenodd")
                buttonDeleteColorPath.setAttribute("clip-rule", "evenodd")
                buttonDeleteColor.append(buttonDeleteColorPath)
                buttonDelete.append(buttonDeleteColor)
                let buttonDeleteSpan = document.createElement('span')
                buttonDeleteSpan.textContent = "Delete"
                buttonDelete.append(buttonDeleteSpan)
                buttonDeleteWrapper.append(buttonDelete)
                buttonWrapper.append(buttonReverse)
                buttonWrapper.append(buttonOwner)
                buttonWrapper.append(buttonDelete)
                singleWrapper.append(inner1)
                singleWrapper.append(buttonWrapper)
                let distance = document.createElement('br')
                singleWrapper.append(distance)
                wrapper.append(singleWrapper)
            }
            document.getElementById("PopupAddIDriss").style.display = "none";

            var hashDict = {}
            for (let [tag_, resultData] of Object.entries(res.result)) {
                hashDict[tag_] = resultData[0]
            }
            await makeApiCallPoints(hashDict);
        } else {
            document.getElementById("ErrorNoIDrissFound").style.display = "block";
            document.getElementById("DivTxnHash").style.display = "block";
            document.getElementById("Spinner1").style.display = "none";
            document.getElementById("ButtonSpinner1").innerHTML = "Re-check";
            document.getElementById("ButtonAddIDriss").onclick = function() { checkPayment(); }
        }
    } catch(e) {
    console.log(e)
        document.getElementById("ErrorNoIDrissFound").innerHTML = "Invalid input. Please use a correct format."
        document.getElementById("ErrorNoIDrissFound").style.display = "block";
        document.getElementById("ButtonAddIDriss").onclick = function() { addIDriss(); }
    }
}

function setInitialAddIDriss() {
    document.getElementById("ErrorNoIDrissFound").innerHTML = "No IDriss found. Did you register one?"
    document.getElementById("ErrorNoIDrissFound").style.display = "none";
    document.getElementById("DivTxnHash").style.display = "none";
    document.getElementById("Spinner1").style.display = "none";
    document.getElementById("ButtonSpinner1").innerHTML = "Add"
    document.getElementById("ButtonAddIDriss").onclick = function() { addIDriss(); }
}

async function checkPayment() {
    txn_hash = document.getElementById('InputTxnHash').value;
    $.ajax({
        url: "/v1/checkDashboardPayment",
        type: "GET",
        data: {txn_hash: txn_hash},
        dataType: "json",
        success: async function (data) {
            // add some wait time/ reload page?
            // after successfully adding the hash, it does not show success otherwise
            addIDriss();
        },
        error: function (data) {
            // errors "transaction", "resolved", "receipt"
            if (data.responseJSON.message === "transaction") {
                document.getElementById("ErrorNoIDrissFound").innerHTML = "Transaction hash not found."
            }
            else if (data.responseJSON.message === "resolved") {
                document.getElementById("ErrorNoIDrissFound").innerHTML = "Transaction was found. Did you misspell your IDriss?"
            }
            else if (data.responseJSON.message === "receipt") {
                document.getElementById("ErrorNoIDrissFound").innerHTML = "Unknown transaction receipt. Please connect with us on Discord."
            }
        }
    });
}

function checkOwnership(){
    elems = document.getElementsByClassName('text-sm hidden')
    console.log("Checking ownership with ", account)
    if (account) {
        for (let elem of elems) {
            try {
                if (elem.firstChild.innerHTML == account) {
                    console.log("Match")
                    elem.previousSibling.previousSibling.setAttribute("class", "h-5 w-5 text-[#11dd74]")
                } else {
                    elem.previousSibling.previousSibling.setAttribute("class", "h-5 w-5 text-[#e34234]")
                }
            } catch(e) {
                console.warn(e)
            }
        }
    } else {
        for (let elem of elems) {
            try {
                elem.previousSibling.previousSibling.setAttribute("class", "h-5 w-5")
            } catch(e) {
                console.warn(e)
            }
        }
    }
}

function checkPW(){
    IDrissID = document.getElementById("AddedIDrissName").innerHTML;

    if (IDrissID == "+" + IDrissID.replace(/[^\d]/, "")) {
        return true
    } else if (IDrissID.match(regT)) {
        return true
    } else if (IDrissID.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        return true
    }
    return false
}

//Adding reverse record to a link
function addReverse(_tag, _inputHash) {
    document.getElementById("ReverseError").style.display = "none";
    document.getElementById('PopupButtonAddReverse').style.display = "block";
    document.getElementById("ButtonSpinner4").innerHTML = "Confirm";
    console.log(_tag, _inputHash)
    _walletTag = walletTagsReverse[_tag]
    if (!_walletTag){
        document.getElementById('PopupButtonAddReverse').style.display = "none";
        document.getElementById("ReverseError").innerHTML = "Reverse records for this wallet address type are not supported yet. Choose a different wallet.";
        document.getElementById("ReverseError").style.display = "block";
    }
    if (!checkPW()){
        document.getElementById('PopupButtonAddReverse').style.display = "none";
        document.getElementById("ReverseError").innerHTML = "Reverse records can only be set for IDriss names without passwords.";
        document.getElementById("ReverseError").style.display = "block";
    }
    document.getElementById("PopupAddReverse").style.display = "";
    document.getElementById("PopupButtonAddReverse").onclick = function() { addReverseConfirm(_walletTag, _inputHash); }
}

async function addReverseConfirm(_walletTag, _hash) {
    document.getElementById("Spinner4").style.display = "";
    document.getElementById("ButtonSpinner4").innerHTML = "";
    document.getElementById("PopupButtonAddReverse").onclick = "";
    console.log(_walletTag, _hash, " Confirming...")
    let _handle = document.getElementById("firstInput").innerText;
    console.log(_handle)
    if (_handle.match(regT)) {
        _handleT = _handle;
        _handle = await getTwitterID(_handle);
        console.log(_handle);
        if (_handle == "Not found") {
            throw new Error("Twitter handle not found.")
        }
    }
    if (!account) {
        await connectWallet();
        checkOwnership();
    }
    try {
        accounts = await web3.eth.getAccounts();
        console.log(accounts)
        selectedAccount = accounts[0];
        console.log(selectedAccount)
        owner = await makeApiCallOwner(_hash);
        if (owner.toLowerCase() != selectedAccount.toLowerCase()) {
            throw new Error("Only IDrissOwner can sign reverse IDriss.");
        }
        resolvedAddress = await contract.methods.getIDriss(_hash).call()
        console.log(resolvedAddress)
        console.log(_hash)
        if (resolvedAddress.toLowerCase() != selectedAccount.toLowerCase()) {
            throw new Error("Wrong address connected.");
        }
        await switchtopolygon();
        document.getElementById('ReverseError').style.display = "none";
        let reverseContract = await loadContractReverse(web3);
        reverse = await reverseContract.methods.reverseIDriss(selectedAccount).call();
        if (reverse) {
            throw new Error("Reverse mapping exists.");
        }
        console.log(_handle, _walletTag)
        await fetch('https://gasstation-mainnet.matic.network/v2')
        .then(response => response.json())
        .then(json => gas = String(Math.round(json['standard']['maxFee']*1000000000)))
        await reverseContract.methods.registerReverseIDriss(_handle, _walletTag).send({ from: selectedAccount, value: 0,  gasPrice: gas });
        document.getElementById("PopupAddReverse").style.display = "none";
        document.getElementById("Spinner4").style.display = "none";
        document.getElementById("ButtonSpinner4").innerHTML = "Confirm";
    } catch(e) {
        if (e === "network" || e === "network1") {
            document.getElementById("ReverseError").innerHTML = "Please switch the network in your wallet to Polygon.";
            document.getElementById("ReverseError").style.display = "block";
            document.getElementById("Spinner4").style.display = "none";
            document.getElementById("ButtonSpinner4").innerHTML = "Try Again";
            document.getElementById("PopupButtonAddReverse").onclick = function() { addReverseConfirm(_walletTag, _hash); }
            return
        } else {
            if (e.message.includes('Rate limit exceeded')) {
                    await new Promise(r => setTimeout(r, Math.random() * 2000));
            } else if (e.message.includes('Only IDrissOwner can sign reverse IDriss.')){
            console.log("not the owner")
                document.getElementById("ReverseError").innerHTML = "The wallet signing this transaction must match the owner address and the address linked to your IDriss.";
                document.getElementById("ReverseError").style.display = "block";
                document.getElementById("Spinner4").style.display = "none";
                document.getElementById("ButtonSpinner4").innerHTML = "Try Again";
                document.getElementById("PopupButtonAddReverse").onclick = function() { addReverseConfirm(_walletTag, _hash); }
                throw e;
            } else if (e.message.includes('Wrong address connected.')){
            console.log("wrong address connected")
                document.getElementById("ReverseError").innerHTML = "The wallet signing this transaction must match the owner address and the address linked to your IDriss.";
                document.getElementById("ReverseError").style.display = "block";
                document.getElementById("Spinner4").style.display = "none";
                document.getElementById("ButtonSpinner4").innerHTML = "Try Again";
                document.getElementById("PopupButtonAddReverse").onclick = function() { addReverseConfirm(_walletTag, _hash); }
                throw e;
            } else if (e.message.includes('Twitter handle not found.')){
                document.getElementById("ReverseError").innerHTML = "We couldn't confirm your Twitter handle. Please try again in a few minutes.";
                document.getElementById("ReverseError").style.display = "block";
                document.getElementById("Spinner4").style.display = "none";
                document.getElementById("ButtonSpinner4").innerHTML = "Try Again";
                document.getElementById("PopupButtonAddReverse").onclick = function() { addReverseConfirm(_walletTag, _hash); }
                throw e;
            } else if (e.message.includes('Reverse mapping exists.')){
                document.getElementById("ReverseError").innerHTML = "Reverse record exists. Please contact us on Twitter or Discord.";
                document.getElementById("ReverseError").style.display = "block";
                document.getElementById("Spinner4").style.display = "none";
                document.getElementById("ButtonSpinner4").innerHTML = "Try Again";
                document.getElementById("PopupButtonAddReverse").onclick = function() { addReverseConfirm(_walletTag, _hash); }
                throw e;
            } else{
                document.getElementById("ReverseError").innerHTML = "The transaction was rejected in your wallet. Please try again.";
                document.getElementById("ReverseError").style.display = "block";
                document.getElementById("Spinner4").style.display = "none";
                document.getElementById("ButtonSpinner4").innerHTML = "Try Again";
                document.getElementById("PopupButtonAddReverse").onclick = function() { addReverseConfirm(_walletTag, _hash); }
                throw e;
            }
        }
    }
}

async function checkReverse(_address) {
    try {
        let reverseContract = await loadContractReverse(defaultWeb3);
        reverse = await reverseContract.methods.reverseIDriss(_address).call();
        if (reverse) {
            return true
        }
        return false
    } catch {
        return false
    }
}

function deleteReverse(_address) {
    document.getElementById("PopupButtonDeleteReverse").onclick = function() { deleteReverseConfirm(_address); }
    document.getElementById("ButtonSpinner5").innerHTML = "Remove";
    document.getElementById("Spinner5").style.display = "none";
    document.getElementById('DeleteReverseError').style.display = "none";
    document.getElementById('PopupButtonAddReverse').style.display = "block";
    document.getElementById("PopupDeleteReverse").style.display = "";
    console.log(_address)
}

async function deleteReverseConfirm(_address) {
    document.getElementById("Spinner5").style.display = "";
    document.getElementById("ButtonSpinner5").innerHTML = "";
    document.getElementById("PopupButtonDeleteReverse").onclick = "";
    if (!account) {
        await connectWallet();
        checkOwnership();
    }
    try {
        accounts = await web3.eth.getAccounts();
        console.log(accounts)
        selectedAccount = accounts[0];
        if (selectedAccount != _address){
            throw new Error("Wrong Account.");
        }
        console.log(selectedAccount)
        await switchtopolygon();
        let reverseContract = await loadContractReverse(web3);
        await fetch('https://gasstation-mainnet.matic.network/v2')
        .then(response => response.json())
        .then(json => gas = String(Math.round(json['standard']['maxFee']*1000000000)))
        await reverseContract.methods.deleteReverseMapping().send({ from: selectedAccount, value: 0,  gasPrice: gas });
        document.getElementById("PopupDeleteReverse").style.display = "none";
        document.getElementById("Spinner5").style.display = "none";
        document.getElementById("ButtonSpinner5").innerHTML = "Remove";
    } catch(e) {
        if (e === "network" || e === "network1") {
            document.getElementById("DeleteReverseError").innerHTML = "Please switch the network in your wallet to Polygon.";
            document.getElementById("DeleteReverseError").style.display = "block";
            document.getElementById("Spinner5").style.display = "none";
            document.getElementById("ButtonSpinner5").innerHTML = "Try Again";
            document.getElementById("PopupButtonDeleteReverse").onclick = function() { deleteReverseConfirm(_address); }
            return
        } else {
            if (e.message.includes('Rate limit exceeded')) {
                    await new Promise(r => setTimeout(r, Math.random() * 2000));
            } else if (e.message.includes('Wrong Account.')){
                document.getElementById("DeleteReverseError").innerHTML = "Please connect with the owner address to perform this transaction.";
                document.getElementById("DeleteReverseError").style.display = "block";
                document.getElementById("Spinner5").style.display = "none";
                document.getElementById("ButtonSpinner5").innerHTML = "Try Again";
                document.getElementById("PopupButtonDeleteReverse").onclick = function() { deleteReverseConfirm(_address); }
                throw e;
            } else {
                document.getElementById("DeleteReverseError").innerHTML = "The transaction was rejected in your wallet. Please try again.";
                document.getElementById("DeleteReverseError").style.display = "block";
                document.getElementById("Spinner5").style.display = "none";
                document.getElementById("ButtonSpinner5").innerHTML = "Try Again";
                document.getElementById("PopupButtonDeleteReverse").onclick = function() { deleteReverseConfirm(_address); }
                throw e;
            }
        }
    }
}


//MANAGE IDRISS TAB
async function changeOwner(hash_) {
    document.getElementById('PopupButtonChangeOwner').onclick = "";
    document.getElementById('PopupButtonChangeOwnerFromIDriss').onclick = "";
    document.getElementById('InputChangeOwnerAddress').addEventListener("keyup", function (event) {
        if (defaultWeb3.utils.isAddress(document.getElementById('InputChangeOwnerAddress').value)) {
            document.getElementById('PopupButtonChangeOwner').onclick = function() { changeOwnerConfirm(); }
            document.getElementById('ErrorWrongChangeOwnerAddress').style.display = "none";
        }
    });
    console.log(hash_)
    if (!account) {
        await connectWallet();
        checkOwnership();
    }
    try {
        accounts = await web3.eth.getAccounts();
        console.log(accounts)
        selectedAccount = accounts[0];
        console.log(selectedAccount)
        owner = await makeApiCallOwner(hash_);
        if (owner != selectedAccount) {
            if (owner === "0xc62d0142c91Df69BcdfC13954a87d6Fe1DdfdEd6") {
                //1. We are the owner because an airdrop was claimed -> trigger verification path
                console.log("error not owner should disappear")
                document.getElementById('ErrorNotAnOwner').style.display = 'none';
                document.getElementById("PopupChangeOwnerFromIDriss").style.display = "";
                document.getElementById("PopupChangeOwnerFromIDriss").value = hash_;

                verificationInput = document.getElementById("firstInput").innerText;
                verificationInput = lowerFirst(verificationInput).replace(" ", "");

                if (verificationInput.match(regPh)) {
                    // Phone is easily extracted
                    verificationInput = convertPhone(verificationInput)
                    document.getElementById("firstInput").innerText = verificationInput.match(regPh)[0];
                    let verificationPW;
                    if (verificationInput == verificationInput.match(regPh)[0]) {
                        verificationPW = ""
                    } else {
                        verificationPW = verificationInput.match(regPh)[0]
                    }
                    document.getElementById("addPassword").style.display = "none";
                    document.getElementById("SendOTP").onclick = function() { sendOTP(verificationInput.match(regPh)[0], verificationPW); }
                } else if (verificationInput.match(regM)) {
                    document.getElementById("SendOTP").onclick = function() { sendOTP(verificationInput); }
                    // extract email
                    document.getElementById('InputPasswordChangeOwner').addEventListener("keyup", function (event) {
                        if (document.getElementById("CheckboxPasswordChangeOwner").checked) {
                            InputPassword = document.getElementById('InputPasswordChangeOwner').value
                            if (InputPassword) {
                                splitReg = new RegExp("("+InputPassword+")", 'g')
                                splitID = verificationInput.split(splitReg)
                                console.log(splitID)
                                document.getElementById("firstInput").innerText = splitID[0];
                                if (splitID[0]+splitID[1] === verificationInput  && splitID[0].match(regM)) {
                                    document.getElementById("ErrorWrongPasswordChangeOwner").style.display = "none";
                                    document.getElementById("SendOTP").onclick = function() { sendOTP(splitID[0], splitID[1]); }
                                } else {
                                    document.getElementById("ErrorWrongPasswordChangeOwner").style.display = "block";
                                    document.getElementById("SendOTP").onclick = ""
                                }
                            } else {
                                document.getElementById("SendOTP").onclick = function() { sendOTP(verificationInput); }
                                document.getElementById("firstInput").innerText = verificationInput;
                            }
                        }
                    });

                } else if (verificationInput.match(regT)) {
                    // twitter path
                    console.log("Getting tweetContent")
                    $.ajax({
                        url: "/v1/verifyTwitter",
                        type: "GET",
                        data: {input: verificationInput, hash_: document.getElementById("PopupChangeOwnerFromIDriss").value},
                        dataType: "json",
                        success: async function (data) {
                            document.getElementById("tweetContent").innerHTML = data.msg;
                            document.getElementById("noTwitter-error").style.display = "none";
                        },
                        error: function (data) {
                            document.getElementById("noTwitter-error").style.display = "block";
                        }
                    });
                    document.getElementById("mailorphone").style.display = "none";
                    document.getElementById("twitter").style.display = "block";
                    document.getElementById("accountName").innerHTML = verificationInput;
                    document.getElementById("PopupButtonChangeOwnerFromIDriss").onclick = function() { transferOwnerConfirmTwitter(); }
                }
            }
            document.getElementById('ErrorNotAnOwner').style.display = 'block';
            throw new Error("Only IDrissOwner can delete binding");
        } else {
            //2. Wallet that is connected is owner -> trigger "new owner input" popup
            document.getElementById('ErrorNotAnOwner').style.display = 'none';
            document.getElementById("PopupChangeOwner").style.display = "";
            document.getElementById("PopupChangeOwner").value = hash_;
        }
    } catch {
        console.log("hehe")
    }

}

async function sendOTP(identifier_, password_="") {

    hash_ = document.getElementById("PopupChangeOwnerFromIDriss").value
    if (!document.getElementById("CheckboxPasswordChangeOwner").checked) {
        password_=""
    }
    $.ajax({
            url: "/v1/sendOTP",
            type: "GET",
            data: {input: identifier_, password_: password_, hash_: hash_},
            dataType: "json",
            success: function (data) {
                console.log(data)
                console.log("OTP sent")
                document.getElementById("OTP").style.display = "block";
                document.getElementById('PopupButtonChangeOwner').onclick = function() { transferOwnerConfirm(hash_, selectedAccount);}
                document.getElementById("PopupButtonChangeOwnerFromIDriss").onclick = function() { transferOwnerConfirm(hash_, selectedAccount);}
            },
            error: function (data) {
                document.getElementById("OTP").style.display = "none";
                console.log("Something went wrong.")
            }
    });
}


async function transferOwnerConfirm(hash_, newOwner_) {
    $.ajax({
        url: "/v1/transferOwner",
        type: "GET",
        data: {newOwner: newOwner_, OTP: document.getElementById("OTPInput").value},
        dataType: "json",
        success: async function (data) {
            console.log(data)
            console.log("Ownership transferred")
            document.getElementById('PopupChangeOwnerFromIDriss').style.display = "none";
            document.getElementById('otpError').style.display = "none";
            await checkOwnership();
        },
        error: function (data) {
            if (data.responseJSON.tries_left === 0) {
                document.getElementById("OTP").style.display = "none";
                document.getElementById('otpError').style.display = "none";
                return
            }
            document.getElementById('otpError').style.display = "block";
        }
    });
}

async function transferOwnerConfirmTwitter() {

    $.ajax({
        url: "/v1/verifyTwitterConfirm",
        type: "GET",
        data: {newOwner: selectedAccount},
        dataType: "json",
        success: async function (data) {
            console.log(data)
            console.log("Ownership transferred")
            document.getElementById('PopupChangeOwnerFromIDriss').style.display = "none";
            document.getElementById('noTweet-error').style.display = "none";
            document.getElementById('ErrorNotAnOwner').style.display = 'none';
            await checkOwnership();
        },
        error: function (data) {
            document.getElementById('noTweet-error').style.display = "block";
            return
        }
    });
}


//Changing ownership of a given link

async function changeOwnerConfirm() {
    document.getElementById("Spinner2").style.display = "";
    document.getElementById("ButtonSpinner2").innerHTML = "";
    document.getElementById('PopupButtonChangeOwner').onclick = "";
    newIDrissOwner = document.getElementById('InputChangeOwnerAddress').value;
    if (!defaultWeb3.utils.isAddress(newIDrissOwner)) {
        document.getElementById('ErrorWrongChangeOwnerAddress').style.display = "block";
        document.getElementById("Spinner2").style.display = "none";
        document.getElementById("ButtonSpinner2").innerHTML = "Confirm";
        return
    } else {
        document.getElementById('ErrorWrongChangeOwnerAddress').style.display = "none";
    }

    if (!account) {
        await connectWallet();
        checkOwnership();
    }
    try {
        accounts = await web3.eth.getAccounts();
        console.log(accounts)
        selectedAccount = accounts[0];
        console.log(selectedAccount)
        hash_ = document.getElementById("PopupChangeOwner").value;
        console.log(hash_)
        owner = await makeApiCallOwner(hash_);
        if (owner != selectedAccount) {
            document.getElementById('ErrorWrongOwnerPopup1').style.display = "none";
            throw new Error("Only IDrissOwner can change ownership");
        }
        await switchtopolygon();
        document.getElementById('ErrorWrongOwnerPopup1').style.display = "none";
        let localContract = await loadContractLocal(web3);
        await fetch('https://gasstation-mainnet.matic.network/v2')
        .then(response => response.json())
        .then(json => gas = String(Math.round(json['standard']['maxFee']*1000000000)))
        await localContract.methods.transferIDrissOwnership(hash_, newIDrissOwner).send({ from: selectedAccount, value: 0,  gasPrice: gas });
        document.getElementById("PopupChangeOwner").style.display = "none";
        document.getElementById("Spinner2").style.display = "none";
        document.getElementById("ButtonSpinner2").innerHTML = "Change";
        await checkOwnership();
    } catch(e) {
        if (e === "network" || e === "network1") {
            document.getElementById("Spinner2").style.display = "none";
            document.getElementById("ButtonSpinner2").innerHTML = "Change";
            document.getElementById("PopupButtonChangeOwner").onclick = function() { changeOwnerConfirm(); }
            return
        } else {
            if (e.message.includes('Rate limit exceeded')) {
                    await new Promise(r => setTimeout(r, Math.random() * 2000));
            } else if (e.message.includes('Only IDrissOwner can change ownership')){
                document.getElementById("Spinner2").style.display = "none";
                document.getElementById("ButtonSpinner2").innerHTML = "Confirm";
                document.getElementById("PopupButtonChangeOwner").onclick = function() { changeOwnerConfirm(); }
                document.getElementById('ErrorWrongOwnerPopup1').style.display = "block";
                throw e;
            } else {
                document.getElementById("Spinner2").style.display = "none";
                document.getElementById("ButtonSpinner2").innerHTML = "Confirm";
                document.getElementById("PopupButtonChangeOwner").onclick = function() { changeOwnerConfirm(); }
                throw e;
            }
        }
    }

}

//Deleting given IDriss link
//ToDo: allow deleting when reverse record is to different IDriss

async function deleteIDriss(hash_, address_) {
    console.log(hash_)
    document.getElementById("PopupDeleteIDriss").value = hash_;
    let reverseContract = await loadContractReverse(defaultWeb3);
    reverse = await reverseContract.methods.reverseIDriss(address_).call();
    if (reverse) {
        document.getElementById('notOwnerError').innerHTML = "You have to remove the reverse record before deleting your IDriss.";
        document.getElementById('notOwnerError').style.display = "block";
        document.getElementById("PopupButtonDeleteIDriss").style.display = "none";
        document.getElementById("PopupDeleteIDriss").style.display = "";
        return
    }
    document.getElementById('notOwnerError').style.display = "none";
    document.getElementById("PopupButtonDeleteIDriss").style.display = "block";
    document.getElementById("PopupDeleteIDriss").style.display = "";
}

async function deleteIDrissConfirm() {
    document.getElementById("Spinner3").style.display = "";
    document.getElementById("ButtonSpinner3").innerHTML = "";
    document.getElementById("PopupButtonDeleteIDriss").onclick = "";
    if (!account) {
        await connectWallet();
        checkOwnership();
    }
    try {
        accounts = await web3.eth.getAccounts();
        console.log(accounts)
        selectedAccount = accounts[0];
        console.log(selectedAccount)
        hash_ = document.getElementById("PopupDeleteIDriss").value;
        console.log(hash_)
        owner = await makeApiCallOwner(hash_);
        if (owner != selectedAccount) {
            throw new Error("Only IDrissOwner can delete binding");
        }
        await switchtopolygon();
        document.getElementById('notOwnerError').style.display = "none";
        let localContract = await loadContractLocal(web3);
        await fetch('https://gasstation-mainnet.matic.network/v2')
        .then(response => response.json())
        .then(json => gas = String(Math.round(json['standard']['maxFee']*1000000000)))
        await localContract.methods.deleteIDriss(hash_).send({ from: selectedAccount, value: 0,  gasPrice: gas });
        document.getElementById("PopupDeleteIDriss").style.display = "none";
        elem = document.getElementById(hash_);
        elem.parentNode.removeChild(elem);
        document.getElementById("Spinner3").style.display = "none";
        document.getElementById("ButtonSpinner3").innerHTML = "Delete";
        document.getElementById("PopupButtonDeleteIDriss").onclick = function() { deleteIDrissConfirm(); }
    } catch(e) {
        if (e === "network" || e === "network1") {
            document.getElementById("Spinner3").style.display = "none";
            document.getElementById("ButtonSpinner3").innerHTML = "Delete";
            document.getElementById("PopupButtonDeleteIDriss").onclick = function() { deleteIDrissConfirm(); }
            return
        } else {
            if (e.message.includes('Rate limit exceeded')) {
                    await new Promise(r => setTimeout(r, Math.random() * 2000));
            } else if (e.message.includes('Only IDrissOwner can delete binding')){
                document.getElementById("PopupButtonDeleteIDriss").onclick = function() { deleteIDrissConfirm(); }
                document.getElementById('notOwnerError').innerHTML = "You are not the owner of this IDriss.";
                document.getElementById('notOwnerError').style.display = "block";
                throw e;
            } else {
                document.getElementById("PopupButtonDeleteIDriss").onclick = function() { deleteIDrissConfirm(); }
                throw e;
            }
        }
    }
}


//REWARDS TAB

//Adding points from a new tweet

function openPopupAddNewIDrissRewards() {
    document.getElementById("PopupAddNewIDrissRewards").style.display = "";
}

function closePopupAddNewIDrissRewards() {
    document.getElementById("PopupAddNewIDrissRewards").style.display = "none";
}

function closePopupChangeFromIDriss() {
    document.getElementById("PopupChangeOwnerFromIDriss").style.display = "none";
}

function closePopupChangeIDriss() {
    document.getElementById("PopupChangeOwner").style.display = "none";
}

function closePopupDeleteIDriss() {
    document.getElementById("PopupDeleteIDriss").style.display = "none";
}

function closePopupAddReverse() {
    document.getElementById("PopupAddReverse").style.display = "none";
}

function closePopupDeleteReverse() {
    document.getElementById("PopupDeleteReverse").style.display = "none";
}


//Adding next IDriss to the dashboard and to the reward system

async function addNextIDriss() {
    inputString = document.getElementById("InputNewIDriss").value;
    res = await simpleResolve(inputString);
    if (Object.values(res.result).length > 0) {
        let newName = document.createElement('div')
        newName.className = 'mr-2 self-center'
        newNameInner = document.createElement('a')
        newNameInner.className = "bg-green-100 text-[#11dd74] px-3 py-2 rounded-md text-sm font-medium"
        newNameInner.setAttribute("aria-current", "page")
        newNameInner.textContent = inputString
        newName.append(newNameInner)

        document.getElementById('RewardsLinks').insertBefore(newName, document.getElementById('RewardsLinks').childNodes[0])
        closePopupAddNewIDrissRewards();
        await refreshRewards();
    } else {
        document.getElementById("ErrorNoIDrissFound2").style.display = "block";
    }
// sending button: id="ButtonAddNextIDriss" onclick="addNextIDriss()"
}

async function addTweet() {
    url = document.getElementById("InputTweetLink").value;
    await makeApiCallAddTweet(url);
    var hashDict = {}
    for (let [tag_, resultData] of Object.entries(res.result)) {
        hashDict[tag_] = resultData[0]
    }
    await makeApiCallPoints(hashDict);
}

//Refreshing rewards (checking for new likes, etc.)

async function refreshRewards() {
    var hashDict = {}
    inputs = document.getElementById('RewardsContent').getElementsByClassName('bg-green-100 text-[#11dd74] px-3 py-2 rounded-md text-sm font-medium')
    inputStrings = []
    for (let elem of inputs) {
    console.log(elem.innerHTML)
        inputStrings.push(elem.innerHTML)
    }
    console.log(inputStrings)
    inputStrings = new Set(inputStrings);
    for (let inputString of inputStrings) {
        res = await simpleResolve(inputString);
            for (let [tag_, resultData] of Object.entries(res.result)) {
                console.log(resultData[0])
                hashDict[resultData[0]] = resultData[0]
            }
    }
    console.log(hashDict)
    await makeApiCallUpdateTwitter(hashDict);
    await makeApiCallPoints(hashDict);
    console.log("updated")
}

function isMetaMaskInstalled(){
    if (window.ethereum.isMetaMask) {
        return true
    }
    else {
        return false
    }
}

function isTallyInstalled(){
    if (window.ethereum.isTally) {
        return true
    }
    else {
        return false
    }
}

// add switch to other chains for other payments
async function switchtopolygon() {
    const web3 = new Web3(provider);

    //  rpc method?
    console.log("Checking chain...")
    const chainId = await web3.eth.getChainId();
    console.log(chainId);

    // check if correct chain is connected
    console.log("Connected to chain ", chainId)
    if (chainId != 137) {
        console.log("Switch to Polygon requested")
        try {
            await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }],
        });
        } catch (switchError) {
        console.log(switchError)
            if (switchError.message === "JSON RPC response format is invalid") {
                throw "network1"
            }
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await provider.request({
                    method: 'wallet_addEthereumChain',
                    params: [{ chainId: '0x89', chainName: 'Matic', rpcUrls: ['https://polygon-rpc.com/'], nativeCurrency: {name: 'MATIC', symbol: 'MATIC', decimals: 18}}],
                    });
                } catch (addError) {

                    alert("Please add Polygon network to continue.");
                }
            }
            console.log("Please switch to Polygon network.");
            // disable continue buttons here
            token = "MATIC";
            throw "network"
        }
    }
}

async function simpleResolve(identifier, coin = "", network = "") {
    contract = await loadContract();
    let twitterID;
    let identifierT;
    identifier = lowerFirst(identifier).replace(" ", "");
    if (identifier.match(regPh)) {
        identifier = convertPhone(identifier)
    } else if (!identifier.match(regM) && !identifier.match(regT)) {
        throw new Error("Not a valid input. Input must start with valid phone number, email or @twitter handle.")
    }
    if (identifier.match(regT)) {
        identifierT = identifier;
        identifier = await getTwitterID(identifier);
        console.log(identifier);
        if (identifier == "Not found")
            throw new Error("Twitter handle not found.")
    }

    let foundMatchesPromises = {}
    for (let [network_, coins] of Object.entries(walletTags)) {
        if (network && network_ != network) continue;
        for (let [coin_, tags] of Object.entries(coins)) {
            if (coin && coin_ != coin) continue;
            for (let [tag_, tag_key] of Object.entries(tags)) {
                if (tag_key) {
                    console.log(tag_key)
                    foundMatchesPromises[tag_] = new Array(digestMessage(identifier + tag_key), digestMessage(identifier + tag_key).then(digested => makeApiCallAddress(digested)));
                }
            }
        }
    }
    ///awaiting on the end for better performance
    let foundMatches = {}
    for (let [tag_, promise] of Object.entries(foundMatchesPromises)) {
        try {
            let address = await promise[1];
            let hash_ = await promise[0]
            if (address) {
            console.log(address)
            console.log(hash_)
                let date = new Date(await makeApiCallDate(hash_) * 1000);
                date = (date.getMonth()+1)+
                      "/"+date.getDate()+
                      "/"+date.getFullYear()+
                      " "+date.getHours()+
                      ":"+date.getMinutes()
                console.log(date)
                let owner = await makeApiCallOwner(hash_);
                var res = new Array(hash_, address, date, owner);
                foundMatches[tag_] = res;
            }
        } catch (e) {
            console.warn(e);
        }
    }

    // return twitter id when twitter id was searched for
    if (twitterID) {
        return {"input": identifierT, "result": foundMatches, "twitterID": identifier}
    } else {
        return {"input": identifier, "result": foundMatches}
    }
    // catch block if coin/network (combination) is invalid/not found
}

async function getTwitterID(identifier) {
    const request = await fetch("https://www.idriss.xyz/v1/getTwitterIDDashboard?identifier=" + encodeURIComponent(identifier));
    const response = await request.json();
    return response.twitterID;
}

async function makeApiCallAddress(digested) {
    for (let i = 0; i < 10; i++) {
        try {
            return await contract.methods.getIDriss(digested).call()
        } catch (e) {
            if (e.message.includes('Rate limit exceeded')) {
                await new Promise(r => setTimeout(r, Math.random() * 2000));
            } else {
                throw e;
            }
        }
    }
}

async function makeApiCallDate(digested) {
    for (let i = 0; i < 10; i++) {
        try {
            return await contract.methods.payDates(digested).call()
        } catch (e) {
            if (e.message.includes('Rate limit exceeded')) {
                await new Promise(r => setTimeout(r, Math.random() * 2000));
            } else {
                throw e;
            }
        }
    }
}

async function makeApiCallOwner(digested) {
    for (let i = 0; i < 10; i++) {
        try {
            return await contract.methods.IDrissOwners(digested).call()
        } catch (e) {
            if (e.message.includes('Rate limit exceeded')) {
                await new Promise(r => setTimeout(r, Math.random() * 2000));
            } else {
                throw e;
            }
        }
    }
}
let a;
async function makeApiCallPoints(hashDict) {
    $.ajax({
            url: "/v1/calcPoints",
            type: "GET",
            data: hashDict,
            dataType: "json",
            success: function (data) {
                let refLink = Object.values(data)[0]['refLink']
                console.log(data)
                referrals = 0
                referralsCount = 0
                retweets = 0
                retweetsCount = 0
                signUp = 0
                signUpCount = 0
                twitterLikes = 0
                likesCount = 0
                for (let [hash_, points] of Object.entries(data)) {
                    referrals += points['referrals'] * 50
                    referralsCount += points['referrals']
                    retweets += points['retweets'] * 1
                    retweetsCount += points['retweets']
                    signUp += points['sign-up']
                    signUpCount += 1
                    twitterLikes = points['twitter_likes'] * 1
                    likesCount += points['twitter_likes']
                }
                document.getElementById("RegisteredNames").innerHTML = signUp + "  ( " + signUpCount + " x 100 )"
                document.getElementById("Referrals").innerHTML = referrals + "  ( " + referralsCount + " x 50 )"
                document.getElementById("TwitterLikes").innerHTML = twitterLikes + "  ( " + likesCount + " x 1 )"
                document.getElementById("TwitterRetweets").innerHTML = retweets + "  ( " + retweetsCount + " x 1 )"
                document.getElementById("ReferralLink").value = refLink
                document.getElementById("ReferralLink").innerHTML = refLink;
                totalPoints = signUp+referrals+twitterLikes+retweets
                document.getElementById("TotalRewards").innerHTML = totalPoints
            },
            error: function (data) {console.log("Something went wrong")}
    });
}

async function makeApiCallUpdateTwitter(hashDict) {
    $.ajax({
            url: "/v1/updateTweets",
            type: "GET",
            data: hashDict,
            dataType: "json",
            success: function (data) {
                console.log(data)
                console.log("Updated tweets.")
            },
            error: function (data) {console.log("Something went wrong.")}
    });
}

async function makeApiCallAddTweet(url_) {
    $.ajax({
            url: "/v1/addTweet",
            type: "GET",
            data: {url: url_},
            dataType: "json",
            success: function (data) {
                console.log(data)
                console.log("Updated tweets.")
                document.getElementById("noTweetFoundError").style.display ="none";
                document.getElementById("notMentionedError").style.display ="none";
                document.getElementById('InputTweetLink').value = "";
            },
            error: function (data) {
                if (data.responseJSON.message === "Tweet not found") {
                    document.getElementById("noTweetFoundError").style.display ="block";
                    document.getElementById("notMentionedError").style.display ="none";
                } else if (data.responseJSON.message === "Hashtag or mention missing") {
                    document.getElementById("noTweetFoundError").style.display ="none";
                    document.getElementById("notMentionedError").style.display ="block";
                }
                console.log("Something went wrong.")
            }
    });
}

// check device type
function deviceType(){
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)){
        return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
        return "mobile";
    }
    return "desktop";
};

// enable discord invites input editing
function enableInputDiscordInvites() {
    document.getElementById("InputDiscordInvites").removeAttribute("disabled");
    document.getElementById("InputDiscordInvites").focus();
    document.getElementById("InputDiscordInvites").addEventListener("keyup", function (event) {
        calcPointsLocal();
    });
}

function calcPointsLocal() {
    if (document.getElementById("InputDiscordInvites").value) {
        document.getElementById("TotalRewards").innerHTML = parseInt(totalPoints)+parseInt(document.getElementById("InputDiscordInvites").value);
    } else {
        document.getElementById("TotalRewards").innerHTML = parseInt(totalPoints);
    }
}


//Show and hide password input field in the change ownership popup

function ShowHidePassword(CheckboxPasswordChangeOwner) {
    var divpassword = document.getElementById("CheckboxPasswordChangeOwner").checked;
    document.getElementById("DivPasswordChangeOwner").style.display = divpassword === true ? "block" : "none";
    document.getElementById("InputPasswordChangeOwner").focus();
}

async function copyTweet() {
    let content = document.getElementById("tweetContent").innerHTML;
    await navigator.clipboard.writeText(content);
    document.getElementById("tooltip").style.visibility = "visible";
    setTimeout(function () {
                    tooltip.style.visibility = "hidden";
                }, 1000);
}

async function copyReferralLink() {
    let url = document.getElementById("ReferralLink").value;
    await navigator.clipboard.writeText(url);
    document.getElementById("tooltip3").style.visibility = "visible";
    setTimeout(function () {
                    tooltip3.style.visibility = "hidden";
                }, 1000);
}


document.getElementById("InputIDriss").addEventListener("keyup", function (event) {
    setInitialAddIDriss();
    if (event.keyCode === 13) {
        console.log("start search")
        addIDriss();
    }
});
