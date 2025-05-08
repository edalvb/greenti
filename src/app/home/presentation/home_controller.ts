import { Dispatch } from "react";
import { ContactFormModel } from "../domain/contact_form_model";
import { HomeRepositoryImpl } from "../data/repository/home_repository_impl";
import { IHomeRepository } from "../data/repository/i_home_repository";
import { HomeAction } from "./home_state";

export class HomeController {
  private homeRepository: IHomeRepository;

  constructor(private dispatch: Dispatch<HomeAction>) {
    this.homeRepository = new HomeRepositoryImpl();
  }

  public updateContactFormField = (field: keyof ContactFormModel, value: any) => {
    this.dispatch({ type: "SET_CONTACT_FORM_FIELD", payload: { field, value } });
  };

  public toggleFaqItem = (id: string | number) => {
    this.dispatch({ type: "TOGGLE_FAQ_ITEM", payload: id });
  };

  public submitContactForm = async (formData: ContactFormModel) => {
    this.dispatch({ type: "SET_CONTACT_FORM_STATUS", payload: "loading" });
    this.dispatch({ type: "SET_CONTACT_FORM_ERROR", payload: undefined });

    try {
      if (!formData.fullName || !formData.email || !formData.message || !formData.acceptTerms) {
        throw new Error("Por favor, complete todos los campos obligatorios y acepte los términos.");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("Por favor, ingrese un correo electrónico válido.");
      }

      const response = await this.homeRepository.submitContactForm(formData);

      if (response.success) {
        this.dispatch({ type: "SET_CONTACT_FORM_STATUS", payload: "success" });
        this.dispatch({ type: "RESET_CONTACT_FORM" });
      } else {
        this.dispatch({ type: "SET_CONTACT_FORM_STATUS", payload: "error" });
        this.dispatch({ type: "SET_CONTACT_FORM_ERROR", payload: response.message || "Ocurrió un error al enviar el formulario." });
      }
    } catch (error: any) {
      this.dispatch({ type: "SET_CONTACT_FORM_STATUS", payload: "error" });
      this.dispatch({ type: "SET_CONTACT_FORM_ERROR", payload: error.message || "Ocurrió un error inesperado." });
    }
  };
}
