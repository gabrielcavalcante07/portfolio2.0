import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { ButtonGlass } from "./ButtonGlass";
import { X } from "lucide-react";

export const Modal = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="flex overflow-hidden">          
          <ButtonGlass
            content={props.contentB}
            onClick={() => setVisible(true)}
            class={props.classB}
          />

          <div className="flex">
            <Dialog header={props.header} visible={visible} blockScroll={true} closeIcon={<X/>} onMaskClick={true}
            onHide={() => {if (!visible) return; setVisible(false); }}
            className="w-1/2 h-4/5 bg-black/40 backdrop-blur-md p-14">
              {props.contentM}
            </Dialog>
          </div>
        </div>
    )
}
        