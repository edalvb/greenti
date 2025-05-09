"use client"

import React, { createContext, useReducer, useContext, Dispatch } from "react";
import { HomeState, HomeAction, initialHomeState } from "./home_state";
import { TestimonialModel } from "../domain/testimonial_model";
import { FaqItemModel } from "../domain/faq_item_model";

interface HomeContextProps {
  state: HomeState;
  dispatch: Dispatch<HomeAction>;
}

const HomeContext = createContext<HomeContextProps | undefined>(undefined);

const homeReducer = (state: HomeState, action: HomeAction): HomeState => {
  switch (action.type) {
    case "SET_CONTACT_FORM_FIELD":
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          [action.payload.field]: action.payload.value,
        },
      };
    case "SET_CONTACT_FORM_STATUS":
      return { ...state, contactFormStatus: action.payload };
    case "SET_CONTACT_FORM_ERROR":
      return { ...state, contactFormError: action.payload };
    case "RESET_CONTACT_FORM":
      return {
        ...state,
        contactForm: initialHomeState.contactForm,
        contactFormStatus: "idle",
        contactFormError: undefined,
      };
    case "TOGGLE_FAQ_ITEM":
      return {
        ...state,
        activeFaqItem: state.activeFaqItem === action.payload ? null : action.payload,
      };
    case "LOAD_INITIAL_DATA":
      return {
        ...state,
        testimonials: action.payload.testimonials,
        faqItems: action.payload.faqItems,
      };
    default:
      return state;
  }
};

interface HomeProviderProps {
    children: React.ReactNode;
    initialData?: {
        testimonials: TestimonialModel[];
        faqItems: FaqItemModel[];
    };
}

export const HomeProvider: React.FC<HomeProviderProps> = ({ children, initialData }) => {
  const [state, dispatch] = useReducer(homeReducer, {
    ...initialHomeState,
    testimonials: initialData?.testimonials || initialHomeState.testimonials,
    faqItems: initialData?.faqItems || initialHomeState.faqItems,
  });

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = (): HomeContextProps => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
};
