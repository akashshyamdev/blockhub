import Heading from "@components/Heading/Heading";
import { XIcon } from "@heroicons/react/outline";
import { Dispatch, SetStateAction } from "react";
import ClientPortal from "../ClientPortal/ClientPortal";
import classes from "./Modal.module.scss";

export interface ModalProps {
  open: boolean;
  text: string;
  subText?: string;
  setOpen: Dispatch<SetStateAction<ModalProps["open"]>>;
}

export default function Modal({ open, text, subText, setOpen }: ModalProps) {
  const closeModal = () => setOpen(false);

  return (
    <>
      {open && (
        <ClientPortal selector="#modal-root">
          <div className={`${classes.modal__backdrop} text-gray-600`}>
            <div className={classes.modal}>
              <div className={`hero-icon ${classes.modal__close}`}>
                <button className={classes.modal__close} type="button" onClick={closeModal}>
                  <XIcon className={"w-5 h-5"} />
                </button>
              </div>

              <div className={classes.modal__heading}>
                <Heading variant={"h2"} align={"center"} className={""}>
                  {text}
                </Heading>

                <Heading variant={"h4"} align={"center"} className={"mt-7"}>
                  {subText}
                </Heading>
              </div>
            </div>
          </div>
        </ClientPortal>
      )}
    </>
  );
}
