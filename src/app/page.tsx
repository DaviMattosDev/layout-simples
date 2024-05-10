"use client";
import React from "react";
import { useDarkMode } from "./useDarkMode";
import logo from "./utils/logo-w.png";
import logo1 from "./utils/logo-b.png";

const PricingPage: React.FC = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div
      className={`transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <header
        className={`bg-green-500 text-white py-4 text-center relative transition-all duration-500`}
      >
        <img
          className="absolute z-10"
          src={darkMode ? logo1.src : logo.src}
          alt="Logo da Empresa"
          width="200"
          height="200"
        />
        <h1
          className={`text-4xl font-bold ${
            darkMode ? "text-black" : "text-white"
          }`}
        >
          Planos de Consultoria
        </h1>
        <nav className="mt-2">
          <ul className="flex justify-center">
            <li className="mx-2">
              <a
                href="/"
                className={`font-bold text-${
                  darkMode ? "gray-800" : "white"
                } hover:text-gray-200`}
              >
                Início
              </a>
            </li>
            <li className="mx-2">
              <a
                href="/sobre"
                className={`font-bold text-${
                  darkMode ? "gray-800" : "white"
                } hover:text-gray-200`}
              >
                Sobre
              </a>
            </li>
            <li className="mx-2">
              <a
                href="/contato"
                className={`font-bold text-${
                  darkMode ? "gray-800" : "white"
                } hover:text-gray-200`}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <button className="absolute top-2 right-2" onClick={toggleDarkMode}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>

      <section className="py-8">
        <h2 className="text-center text-4xl font-semibold mb-4">
          Escolha o plano que melhor se adapta às suas necessidades!
        </h2>
        <p
          className={`text-center text-lg font-sans text-sm size-25 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Bem-vindo aos nossos planos de preços! Aqui você encontrará opções
          adaptadas às suas necessidades. Nossa equipe está comprometida em
          fornecer os melhores serviços para ajudar no crescimento do seu
          negócio.
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-center text-2xl font-semibold mb-4">
          Comparativo de Planos
        </h2>
        <div className="flex justify-center">
          <div className="w-1/3 bg-white rounded-lg shadow-md p-6 mx-2">
            <h3 className="text-2xl font-semibold mb-2 text-black">
              Plano Básico
            </h3>
            <p className="text-green-500 text-lg font-semibold mb-2">
              R$ 50/mês
            </p>
            <ul className="text-lg text-gray-500 font-style: italic font-light">
              <li>Avaliação de negócios</li>
              <li>Análise de mercado</li>
              <li>Relatórios trimestrais</li>
              <li>Suporte por email</li>
            </ul>
            <button className="mt-4 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600">
              Selecionar
            </button>
          </div>
          <div className="w-1/3 bg-white rounded-lg shadow-md p-6 mx-2">
            <h3 className="text-2xl font-semibold mb-2 text-blue-800">
              Plano Intermediário
            </h3>
            <p className="text-green-500 text-lg font-semibold mb-2">
              R$ 100/mês
            </p>
            <ul className="text-lg text-gray-500 font-style: italic font-light">
              <li>Avaliação de negócios</li>
              <li>Análise de mercado</li>
              <li>Relatórios mensais</li>
              <li>Suporte por email e telefone</li>
            </ul>
            <button className="mt-4 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600">
              Selecionar
            </button>
          </div>
          <div className="w-1/3 bg-white rounded-lg shadow-md p-6 mx-2">
            <h3 className="text-2xl font-semibold mb-2 text-red-800">
              Plano Premium
            </h3>
            <p className="text-green-500 text-lg font-semibold mb-2">
              R$ 200/mês
            </p>
            <ul className="text-lg text-gray-500 font-style: italic font-light">
              <li>Avaliação de negócios</li>
              <li>Análise de mercado</li>
              <li>Relatórios semanais</li>
              <li>Suporte 24/7 por email, telefone e chat</li>
            </ul>
            <button className="mt-4 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600">
              Selecionar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
