import { Dropdown, Input, Option, OptionOnSelectData, SelectionEvents } from "@fluentui/react-components";
import Window from "../components/Window";
import './launcher.css';
import { toggleStoreApp, nameToID } from "./store/StoreApps";
import {
  useId,
  Link,
  Button,
  Toaster,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
} from "@fluentui/react-components";

const forge = {
  "name": "Minecraft Forge",
  "unblock": false,
  "image": "https://m.media-amazon.com/images/I/51L0-hXjy+L.png",
  "description": "Play Minecraft 1.8 singleplayer, including RTX Shaders and Forge Mod Loader.",
  "url": "%BASE%/minecraft/forge/EaglerForge_125_18.html",
  "category": "Games,Minecraft,Mods"
};

export default function MinecraftLauncherApp() {

  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const notify = () =>
    dispatchToast(
      <Toast>
        <ToastTitle>Minecraft: Bedrock Edition</ToastTitle>
        <ToastBody subtitle="This edition is currently unavalible due to restrictions on running android applications on Glacier.">Unable to switch edition</ToastBody>
      </Toast>,
      { intent: "error" }
    );

  function launchGame() {
    let launcher = document.querySelector('.mclauncher') as HTMLElement;

    launcher.classList.add('closing');
    launcher.classList.remove('opening');

    toggleStoreApp(nameToID(forge.name), forge);
  }

  return (
    <>
      <Toaster toasterId={toasterId} />
      <Window title="Minecraft Launcher" id="mclauncher" taskbarIconID="mclauncher" color={'white'} seperateBorder="1px solid #ffffff0a">
        <div className="lsplit">
          <div className="lsplit-left">
            <div className="option-blank">

            </div>

            <div className="option">
              <img src="/windows/icons/user.png" alt="" />
              <b>Glacier User</b>
            </div>

            <div className="option-blank">

            </div>

            <div className="option active">
              <img src="/minecraft/java.png" alt="" />
              <b>Java Edition</b>
            </div>
            <div className="option" onClick={notify}>
              <img src="/minecraft/bedrock.png" alt="" />
              <b>for Windows</b>
            </div>
            <div className="option disabled">
              <img src="/minecraft/dungeons.ico" alt="" />
              <b>Dungeons</b>
            </div>
            <div className="option disabled">
              <img src="/minecraft/legends.png" alt="" />
              <b>Legends</b>
            </div>
          </div>
          <div className="lsplit-right">
            <div className="rtop">
              <div className="rbox">MINECRAFT: JAVA EDITION<br />
                <span>Play</span>
              </div>
            </div>
            <div className="rbottom">
              <div className="rfarbtm">
                <div className="rfleft">
                  Forge (1.8)
                </div>
                <div className="craftbutton" onClick={launchGame}>
                  PLAY
                </div>
                <div className="rfright">
                  glacier
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>

    </>
  );
}