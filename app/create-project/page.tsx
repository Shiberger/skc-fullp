import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";

import Image from "next/image";


const CreateProject = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  return (
    <div className="">
      <Modal>
        <h3 className="modal-head-text">Create a New Project</h3>
        

        <ProjectForm type="create" session={session} />
      </Modal>
    </div>
  );
};

export default CreateProject;
