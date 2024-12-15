import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
  JoinUs,
  ScreeningMatchingOnboarding,
  MainPage,
  AffiliateProgram,
  ChooseYourIndustry,
  FillTheApplication,
  AllignWithTeam,
  GetYourDreamJob,
  ApplyNowForm,
  RetailCommerce,
  HealthCare,
  TravelAndHospitality,
  Transportation,
  Technology,
  ArtificialIntellegence,
  FooterFAQ,
  IntegrattedStaffing,
  GlobalPayrol
} from '../pages';
import { Error } from '../components';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/integrated-staffing",
        element: <IntegrattedStaffing />
      },
      {
        path: "/screening-matching-onboarding",
        element: <ScreeningMatchingOnboarding />
      },
      {
        path: "/global-payrol",
        element: <GlobalPayrol />
      },
      {
        path: "/retail-and-e-commerce",
        element: <RetailCommerce />
      },
      {
        path: "/heathcare",
        element: <HealthCare />
      },
      {
        path: "/travel-and-hospitality",
        element: <TravelAndHospitality />
      },
      {
        path: "/transportation",
        element: <Transportation />
      },
      {
        path: "/technology",
        element: <Technology />
      },
      {
        path: "/artificial-intelligence-and-machine-learning",
        element: <ArtificialIntellegence />
      },
      {
        path: "/join-us",
        element: <JoinUs />
      },
      {
        path: "/FAQ",
        element: <FooterFAQ />
      },
      {
        path: "/affiliate-program",
        element: <AffiliateProgram />
      }
    ],
    errorElement: <Error />
  },
  {
    path: '/join-us',
    element: <JoinUs />,
  },
  {
    path: '/choose-your-industry-page',
    element: <ChooseYourIndustry />,
  },
  {
    path: "/fill-the-application",
    element: <FillTheApplication />
  },
  {
    path: "/allign-the-team",
    element: <AllignWithTeam />
  },
  {
    path: "/get-your-dream-job",
    element: <GetYourDreamJob />
  },
  {
    path: "/apply-now",
    element: <ApplyNowForm />
  }
]);

export default appRouter;
