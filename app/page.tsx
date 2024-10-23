import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, DatePicker } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-col items-center justify-center bg-blue-500 text-white p-4 rounded-t-lg">
          <Avatar 
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
            alt="Conferencista"
            className="mb-2"
            size="lg" 
          />
          <h2 className="text-xl font-bold">Seminario 2024</h2>
          <p className="text-gray-200">Aprende más sobre ingeniería de software</p>
          <Badge className="mt-2">Conferencia de Paga</Badge>
        </CardHeader>

        <CardBody className="flex flex-col items-center justify-center space-y-4 p-4">
          <label htmlFor="date-picker" className="text-gray-700 ">
            Selecciona una fecha para asistir a la conferencia:
          </label>

          <DatePicker
            id="date-picker"
            label="Fecha de asistencia"
            className="max-w-[284px]"
            aria-label="Selecciona una fecha"
          />
        </CardBody>

        <CardFooter className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-b-lg">
          <Button color="primary" className="bg-blue-500 hover:bg-blue-600">
            Registrarse
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
