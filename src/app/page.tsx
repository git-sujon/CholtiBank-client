import { Button } from "@nextui-org/react";

const HomePage = () => {
    return (
        <div>
             <div className="flex gap-4">
      <Button variant="bordered" radius="md">
        Button
      </Button>
      <Button isDisabled color="primary" radius="md">
        Disabled
      </Button>
    </div>
        </div>
    );
};

export default HomePage;