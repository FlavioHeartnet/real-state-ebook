import { AlertCircle } from "lucide-react";

export default function ErrorMessage() {
  return (
    <div className="text-center space-y-4 py-6">
      <AlertCircle className="w-12 h-12 mx-auto text-red-500" />
      <h3 className="text-xl font-semibold text-red-500">
        Erro ao enviar o formulário
      </h3>
      <p className="text-gray-500">
        Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente
        mais tarde.
      </p>
    </div>
  );
}
