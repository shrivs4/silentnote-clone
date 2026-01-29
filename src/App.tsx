import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainSection from "./components/PainSection";
import FeatureRow from "./components/FeatureRow";
import Steps from "./components/Steps";
import CTA from "./components/CTA";

export default function App() {
  return (
    <Box 
      className="sn-page"
      sx={{
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: { xs: "none", md: "y mandatory" },
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <Navbar />

      <Box sx={{ scrollSnapAlign: { xs: "none", md: "start" }, scrollSnapStop: "always" }}>
        <Hero />
      </Box>
      <Box sx={{ scrollSnapAlign: { xs: "none", md: "start" }, scrollSnapStop: "always" }}>
        <PainSection />
      </Box>

      <Box sx={{ scrollSnapAlign: { xs: "none", md: "start" }, scrollSnapStop: "always" }}>
        <FeatureRow
          badge="Real-time"
          title="Be fully present in every call"
          desc="AI captures every word in real-time so you can focus on the conversation—not scrambling to take notes."
          bullets={[
            "95%+ transcription accuracy",
            "Automatic speaker identification",
            "Support for 60+ languages",
          ]}
          image="/feature-transcription.png"
          flip={false}
        />
      </Box>

      <Box sx={{ scrollSnapAlign: { xs: "none", md: "start" }, scrollSnapStop: "always" }}>
        <FeatureRow
          badge="AI Summaries"
          title="Turn 60-minute calls into 2-minute summaries"
          desc="Get instant meeting recaps with key decisions, action items, and next steps—automatically generated immediately after each call."
          linkText="See example summary"
          image="/feature-summary.png"
          flip={true}
        />
      </Box>

      <Box sx={{ scrollSnapAlign: { xs: "none", md: "start" }, scrollSnapStop: "always" }}>
        <FeatureRow
          badge="Smart Detection"
          title="Never forget a follow-up again"
          desc="AI identifies and extracts action items, assigns owners, and syncs to your favorite tools—Notion, Asana, Slack."
          chips={["Notion", "Linear", "Jira", "Slack", "Trello", "+20 more"]}
          image="/feature-actions.png"
          flip={false}
        />
      </Box>

      <Box sx={{ scrollSnapAlign: { xs: "none", md: "start" }, scrollSnapStop: "always" }}>
        <Steps />
      </Box>
      <Box sx={{ scrollSnapAlign: { xs: "none", md: "start" }, scrollSnapStop: "always" }}>
        <CTA />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}
