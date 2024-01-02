import { Button, Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";

const FeatureCard = ({ feature }: { feature: any }) => {
  const { title, description, icon } = feature;
  return (
    <div>
      <Card className=" shadow-lg p-2  transition-transform transform hover:scale-105 hover:border-primary">
        <CardHeader className="flex items-center justify-center text-secondary">
          {icon}
        </CardHeader>
        <CardBody>
          <h3 className="text-xl font-bold mb-2 text-center text-secondary">{title}</h3>
          {/* <p className="text-gray-600">{description}</p> */}
          <Tooltip showArrow={true} content={description} classNames={{
            content:"max-w-sm"
          }} >
            <Button variant="light" color="primary" className="text-xs hover:bg-primary">Learn More...</Button>
          </Tooltip>
        </CardBody>
      </Card>
    </div>
  );
};

export default FeatureCard;
