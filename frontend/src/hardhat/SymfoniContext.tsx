/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { providers, Signer, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Web3Modal, { IProviderOptions } from "web3modal";
import { MyToken1 } from "./typechain/MyToken1";
import { MyToken1__factory } from "./typechain/factories/MyToken1__factory";
import { UniswapV2Factory } from "./typechain/UniswapV2Factory";
import { UniswapV2Factory__factory } from "./typechain/factories/UniswapV2Factory__factory";
import { UniswapV2ERC20 } from "./typechain/UniswapV2ERC20";
import { UniswapV2ERC20__factory } from "./typechain/factories/UniswapV2ERC20__factory";
import { MyToken2 } from "./typechain/MyToken2";
import { MyToken2__factory } from "./typechain/factories/MyToken2__factory";
import { UniswapV2Router02 } from "./typechain/UniswapV2Router02";
import { UniswapV2Router02__factory } from "./typechain/factories/UniswapV2Router02__factory";
import { UniswapV2Pair } from "./typechain/UniswapV2Pair";
import { UniswapV2Pair__factory } from "./typechain/factories/UniswapV2Pair__factory";
import { ERC20PresetMinterPauser } from "./typechain/ERC20PresetMinterPauser";
import { ERC20PresetMinterPauser__factory } from "./typechain/factories/ERC20PresetMinterPauser__factory";
import { ERC20 } from "./typechain/ERC20";
import { ERC20__factory } from "./typechain/factories/ERC20__factory";

const emptyContract = {
    instance: undefined,
    factory: undefined
};
const defaultProvider: providers.Provider | undefined = undefined;
export const ProviderContext = React.createContext<[providers.Provider | undefined, React.Dispatch<React.SetStateAction<providers.Provider | undefined>>]>([defaultProvider, () => { }]);
const defaultCurrentAddress: string = "";
export const CurrentAddressContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>([defaultCurrentAddress, () => { }]);
const defaultSigner: Signer | undefined = undefined;
export const SignerContext = React.createContext<[Signer | undefined, React.Dispatch<React.SetStateAction<Signer | undefined>>]>([defaultSigner, () => { }]);
const defaultSymfoniContext: SymfoniContextInterface = {
    currentHardhatProvider: "",
    init: () => { throw Error("Symfoni context not initialized") },
    loading: false,
    messages: [],
    providers: []
};
export const SymfoniContext = React.createContext<SymfoniContextInterface>(defaultSymfoniContext);
export const MyToken1Context = React.createContext<SymfoniMyToken1>(emptyContract);
export const UniswapV2FactoryContext = React.createContext<SymfoniUniswapV2Factory>(emptyContract);
export const UniswapV2ERC20Context = React.createContext<SymfoniUniswapV2ERC20>(emptyContract);
export const MyToken2Context = React.createContext<SymfoniMyToken2>(emptyContract);
export const UniswapV2Router02Context = React.createContext<SymfoniUniswapV2Router02>(emptyContract);
export const UniswapV2PairContext = React.createContext<SymfoniUniswapV2Pair>(emptyContract);
export const ERC20PresetMinterPauserContext = React.createContext<SymfoniERC20PresetMinterPauser>(emptyContract);
export const ERC20Context = React.createContext<SymfoniERC20>(emptyContract);

export interface SymfoniContextInterface {
    init: (provider?: string) => void;
    loading: boolean;
    messages: string[];
    currentHardhatProvider: string;
    providers: string[];
}

export interface SymfoniProps {
    autoInit?: boolean;
    showLoading?: boolean;
    loadingComponent?: React.ReactNode;
}

export interface SymfoniMyToken1 {
    instance?: MyToken1;
    factory?: MyToken1__factory;
}

export interface SymfoniUniswapV2Factory {
    instance?: UniswapV2Factory;
    factory?: UniswapV2Factory__factory;
}

export interface SymfoniUniswapV2ERC20 {
    instance?: UniswapV2ERC20;
    factory?: UniswapV2ERC20__factory;
}

export interface SymfoniMyToken2 {
    instance?: MyToken2;
    factory?: MyToken2__factory;
}

export interface SymfoniUniswapV2Router02 {
    instance?: UniswapV2Router02;
    factory?: UniswapV2Router02__factory;
}

export interface SymfoniUniswapV2Pair {
    instance?: UniswapV2Pair;
    factory?: UniswapV2Pair__factory;
}

export interface SymfoniERC20PresetMinterPauser {
    instance?: ERC20PresetMinterPauser;
    factory?: ERC20PresetMinterPauser__factory;
}

export interface SymfoniERC20 {
    instance?: ERC20;
    factory?: ERC20__factory;
}

export const Symfoni: React.FC<SymfoniProps> = ({
    showLoading = true,
    autoInit = true,
    ...props
}) => {
    const [initializeCounter, setInitializeCounter] = useState(0);
    const [currentHardhatProvider, setCurrentHardhatProvider] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [signer, setSigner] = useState<Signer | undefined>(defaultSigner);
    const [provider, setProvider] = useState<providers.Provider | undefined>(defaultProvider);
    const [currentAddress, setCurrentAddress] = useState<string>(defaultCurrentAddress);
    const [fallbackProvider] = useState<string | undefined>(undefined);
    const [providerPriority, setProviderPriority] = useState<string[]>(["web3modal", "hardhat"]);
    const [MyToken1, setMyToken1] = useState<SymfoniMyToken1>(emptyContract);
    const [UniswapV2Factory, setUniswapV2Factory] = useState<SymfoniUniswapV2Factory>(emptyContract);
    const [UniswapV2ERC20, setUniswapV2ERC20] = useState<SymfoniUniswapV2ERC20>(emptyContract);
    const [MyToken2, setMyToken2] = useState<SymfoniMyToken2>(emptyContract);
    const [UniswapV2Router02, setUniswapV2Router02] = useState<SymfoniUniswapV2Router02>(emptyContract);
    const [UniswapV2Pair, setUniswapV2Pair] = useState<SymfoniUniswapV2Pair>(emptyContract);
    const [ERC20PresetMinterPauser, setERC20PresetMinterPauser] = useState<SymfoniERC20PresetMinterPauser>(emptyContract);
    const [ERC20, setERC20] = useState<SymfoniERC20>(emptyContract);
    useEffect(() => {
        if (messages.length > 0)
            console.debug(messages.pop())
    }, [messages])

    const getProvider = async (): Promise<{ provider: providers.Provider, hardhatProviderName: string } | undefined> => {
        let hardhatProviderName = "Not set";
        let _providerPriority = [...providerPriority];
        // Fallback provider
        if (fallbackProvider && autoInit && initializeCounter === 0) {
            if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER") === null) {
                _providerPriority = _providerPriority.sort((a, b) => {
                    return a === fallbackProvider ? -1 : b === fallbackProvider ? 1 : 0;
                })
            }
        }
        const provider = await _providerPriority.reduce(async (maybeProvider: Promise<providers.Provider | undefined>, providerIdentification) => {
            let foundProvider = await maybeProvider
            if (foundProvider) {
                return Promise.resolve(foundProvider)
            }
            else {
                switch (providerIdentification.toLowerCase()) {
                    case "web3modal":
                        try {
                            const provider = await getWeb3ModalProvider()
                            const web3provider = new ethers.providers.Web3Provider(provider);
                            hardhatProviderName = "web3modal";
                            return Promise.resolve(web3provider)
                        } catch (error) {
                            return Promise.resolve(undefined)
                        }
                    case "hardhat":
                        try {
                            const provider = new ethers.providers.JsonRpcProvider({
                                url: "http://127.0.0.1:8545",
                            });
                            hardhatProviderName = "hardhat";
                            return Promise.resolve(provider)
                        } catch (error) {
                            return Promise.resolve(undefined)
                        } default:
                        return Promise.resolve(undefined)
                }
            }
        }, Promise.resolve(undefined)) // end reduce
        return provider ? { provider, hardhatProviderName } : undefined
    };
    const getSigner = async (_provider: providers.Provider, hardhatProviderName: string): Promise<Signer | undefined> => {
        switch (hardhatProviderName) {
            case "web3modal":
                const web3provider = _provider as ethers.providers.Web3Provider
                return await web3provider.getSigner()
            case "hardhat":
                return ethers.Wallet.fromMnemonic("undefined").connect(_provider)
            default:
                return undefined
        }
    };
    const getWeb3ModalProvider = async (): Promise<any> => {
        const providerOptions: IProviderOptions = {

        };
        const web3Modal = new Web3Modal({
            // network: "mainnet",
            cacheProvider: false,
            providerOptions, // required
        });
        return await web3Modal.connect();
    };

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const finish = (text: string) => {
                setLoading(false)
                setMessages(old => [...old, text])
            }
            const finishWithContracts = (text: string) => {
                setMyToken1(getMyToken1(_provider, _signer))
                setUniswapV2Factory(getUniswapV2Factory(_provider, _signer))
                setUniswapV2ERC20(getUniswapV2ERC20(_provider, _signer))
                setMyToken2(getMyToken2(_provider, _signer))
                setUniswapV2Router02(getUniswapV2Router02(_provider, _signer))
                setUniswapV2Pair(getUniswapV2Pair(_provider, _signer))
                setERC20PresetMinterPauser(getERC20PresetMinterPauser(_provider, _signer))
                setERC20(getERC20(_provider, _signer))
                finish(text)
            }
            if (!autoInit && initializeCounter === 0) return finish("Auto init turned off.")
            setLoading(true)
            setMessages(old => [...old, "Initiating Symfoni React"])
            const providerObject = await getProvider() // getProvider can actually return undefined, see issue https://github.com/microsoft/TypeScript/issues/11094

            if (!subscribed || !providerObject) return finish("No provider or signer.")
            const _provider = providerObject.provider
            setProvider(_provider)
            setMessages(old => [...old, "Useing " + providerObject.hardhatProviderName])
            setCurrentHardhatProvider(providerObject.hardhatProviderName)
            const _signer = await getSigner(_provider, providerObject.hardhatProviderName);

            if (!subscribed || !_signer) return finishWithContracts("Provider, without signer.")
            setSigner(_signer)
            setMessages(old => [...old, "Useing signer"])
            const address = await _signer.getAddress()

            if (!subscribed || !address) return finishWithContracts("Provider and signer, without address.")
            setCurrentAddress(address)

            return finishWithContracts("Completed Symfoni context initialization.")
        };
        doAsync();
        return () => { subscribed = false }
    }, [initializeCounter])

    const getMyToken1 = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = "0xAc06DAA1A5A1e5Db0af0F986763dd86427e836e9"
        const instance = _signer ? MyToken1__factory.connect(contractAddress, _signer) : MyToken1__factory.connect(contractAddress, _provider)
        const contract: SymfoniMyToken1 = {
            instance: instance,
            factory: _signer ? new MyToken1__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getUniswapV2Factory = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = "0x0083894f1b6072D7d88658DD711c7E90c083D39c"
        const instance = _signer ? UniswapV2Factory__factory.connect(contractAddress, _signer) : UniswapV2Factory__factory.connect(contractAddress, _provider)
        const contract: SymfoniUniswapV2Factory = {
            instance: instance,
            factory: _signer ? new UniswapV2Factory__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getUniswapV2ERC20 = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = _signer ? UniswapV2ERC20__factory.connect(ethers.constants.AddressZero, _signer) : UniswapV2ERC20__factory.connect(ethers.constants.AddressZero, _provider)
        const contract: SymfoniUniswapV2ERC20 = {
            instance: instance,
            factory: _signer ? new UniswapV2ERC20__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getMyToken2 = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = "0xa9c2f5108e3Ab77a14DB22fb378a09Ebc1AB1447"
        const instance = _signer ? MyToken2__factory.connect(contractAddress, _signer) : MyToken2__factory.connect(contractAddress, _provider)
        const contract: SymfoniMyToken2 = {
            instance: instance,
            factory: _signer ? new MyToken2__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getUniswapV2Router02 = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = "0x60C693EdE6d3D2FE1599e012d1b2f7212593668D"
        const instance = _signer ? UniswapV2Router02__factory.connect(contractAddress, _signer) : UniswapV2Router02__factory.connect(contractAddress, _provider)
        const contract: SymfoniUniswapV2Router02 = {
            instance: instance,
            factory: _signer ? new UniswapV2Router02__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getUniswapV2Pair = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = _signer ? UniswapV2Pair__factory.connect(ethers.constants.AddressZero, _signer) : UniswapV2Pair__factory.connect(ethers.constants.AddressZero, _provider)
        const contract: SymfoniUniswapV2Pair = {
            instance: instance,
            factory: _signer ? new UniswapV2Pair__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getERC20PresetMinterPauser = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = _signer ? ERC20PresetMinterPauser__factory.connect(ethers.constants.AddressZero, _signer) : ERC20PresetMinterPauser__factory.connect(ethers.constants.AddressZero, _provider)
        const contract: SymfoniERC20PresetMinterPauser = {
            instance: instance,
            factory: _signer ? new ERC20PresetMinterPauser__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getERC20 = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = _signer ? ERC20__factory.connect(ethers.constants.AddressZero, _signer) : ERC20__factory.connect(ethers.constants.AddressZero, _provider)
        const contract: SymfoniERC20 = {
            instance: instance,
            factory: _signer ? new ERC20__factory(_signer) : undefined,
        }
        return contract
    }
        ;

    const handleInitProvider = (provider?: string) => {
        if (provider) {
            setProviderPriority(old => old.sort((a, b) => {
                return a === provider ? -1 : b === provider ? 1 : 0;
            }))
        }
        setInitializeCounter(initializeCounter + 1)
    }
    return (
        <SymfoniContext.Provider value={{ init: (provider) => handleInitProvider(provider), providers: providerPriority, currentHardhatProvider, loading, messages }}>
            <ProviderContext.Provider value={[provider, setProvider]}>
                <SignerContext.Provider value={[signer, setSigner]}>
                    <CurrentAddressContext.Provider value={[currentAddress, setCurrentAddress]}>
                        <MyToken1Context.Provider value={MyToken1}>
                            <UniswapV2FactoryContext.Provider value={UniswapV2Factory}>
                                <UniswapV2ERC20Context.Provider value={UniswapV2ERC20}>
                                    <MyToken2Context.Provider value={MyToken2}>
                                        <UniswapV2Router02Context.Provider value={UniswapV2Router02}>
                                            <UniswapV2PairContext.Provider value={UniswapV2Pair}>
                                                <ERC20PresetMinterPauserContext.Provider value={ERC20PresetMinterPauser}>
                                                    <ERC20Context.Provider value={ERC20}>
                                                        {showLoading && loading ?
                                                            props.loadingComponent
                                                                ? props.loadingComponent
                                                                : <div>
                                                                    {messages.map((msg, i) => (
                                                                        <p key={i}>{msg}</p>
                                                                    ))}
                                                                </div>
                                                            : props.children
                                                        }
                                                    </ERC20Context.Provider >
                                                </ERC20PresetMinterPauserContext.Provider >
                                            </UniswapV2PairContext.Provider >
                                        </UniswapV2Router02Context.Provider >
                                    </MyToken2Context.Provider >
                                </UniswapV2ERC20Context.Provider >
                            </UniswapV2FactoryContext.Provider >
                        </MyToken1Context.Provider >
                    </CurrentAddressContext.Provider>
                </SignerContext.Provider>
            </ProviderContext.Provider>
        </SymfoniContext.Provider>
    )

};
