import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
const SignupLoginModule = React.lazy(() => import("pages/SignupLoginModule"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const SecurityPolicy = React.lazy(() => import("pages/SecurityPolicy"));
const EventRegistration = React.lazy(() => import("pages/EventRegistration"));
const EditProfile = React.lazy(() => import("pages/EditProfile"));
const PhoneVerification = React.lazy(() => import("pages/PhoneVerification"));
const PushNotifications = React.lazy(() => import("pages/PushNotifications"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const Events = React.lazy(() => import("pages/Events"));
const PricingEngine = React.lazy(() => import("pages/PricingEngine"));
const GameScore = React.lazy(() => import("pages/GameScore"));
const Scoring = React.lazy(() => import("pages/Scoring"));
const Map = React.lazy(() => import("pages/Map"));
const MultiplayerSupport = React.lazy(() => import("pages/MultiplayerSupport"));
const Leaderboard = React.lazy(() => import("pages/Leaderboard"));
const FaceTagging = React.lazy(() => import("pages/FaceTagging"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/facetagging" element={<FaceTagging />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/multiplayersupport" element={<MultiplayerSupport />} />
          <Route path="/map" element={<Map />} />
          <Route path="/scoring" element={<Scoring />} />
          <Route path="/gamescore" element={<GameScore />} />
          <Route path="/pricingengine" element={<PricingEngine />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/pushnotifications" element={<PushNotifications />} />
          <Route path="/phoneverification" element={<PhoneVerification />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/eventregistration" element={<EventRegistration />} />
          <Route path="/securitypolicy" element={<SecurityPolicy />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signuploginmodule" element={<SignupLoginModule />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
