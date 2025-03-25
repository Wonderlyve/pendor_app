import React, { useState } from 'react';
import AdBanner from '../components/AdBanner';
import EnergyDrinkAd from '../components/EnergyDrinkAd';
import Bet from '../components/Bet';
import { Star, MessageCircle, Share2, ThumbsUp, Calendar, Clock, Trophy } from 'lucide-react';

export default function Home() {
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [isBetModalOpen, setIsBetModalOpen] = useState(false);

  const matches = [
    {
      id: 1,
      competition: "Profite de nos pronostics sportifs experts et augmente tes chances de succès ! Analyse poussée, résultats garantis",
      date: "2024-04-03",
      time: "20:45",
      odds: { "1": 2.80 },
      prediction: "2",
      confidence: 85,
      expert: "Expert Pronos",
      expertRating: 4.8,
      expertImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800",
      likes: 234,
      comments: 45,
      shares: 12,
      detailedPrediction: {
        id: 1,
        match: "PSG vs Manchester City",
        competition: "Ligue des Champions",
        date: "2024-04-03",
        time: "20:45",
        teams: {
          home: "PSG",
          away: "Manchester City",
          homeForm: ["W", "W", "L", "D", "W"],
          awayForm: ["W", "W", "W", "W", "D"],
          homeStats: {
            goalsScored: 15,
            goalsConceded: 8,
            cleanSheets: 3
          },
          awayStats: {
            goalsScored: 18,
            goalsConceded: 5,
            cleanSheets: 4
          }
        },
        odds: {
          home: 2.80,
          draw: 3.40,
          away: 2.50
        },
        analysis: {
          confidence: 85,
          mainBet: "2",
          reasoning: [
            "Manchester City est en excellente forme avec 4 victoires lors des 5 derniers matchs",
            "L'équipe de Guardiola a marqué 18 buts lors de ses 10 derniers déplacements",
            "Le PSG montre des signes de faiblesse en défense ces dernières semaines",
            "City a l'avantage psychologique après leurs dernières confrontations"
          ],
          keyStats: [
            "City: 4 clean sheets lors des 5 derniers matchs",
            "PSG: 8 buts encaissés sur les 5 derniers matchs",
            "Face à face: City invaincu lors des 3 dernières confrontations"
          ],
          risks: [
            "Le PSG est très fort à domicile",
            "Possible fatigue de City après un match intense le week-end"
          ]
        },
        relatedBets: [
          {
            id: 1,
            match: "Real Madrid vs Bayern Munich",
            prediction: "1",
            odds: 2.10,
            confidence: 75
          },
          {
            id: 2,
            match: "Inter vs Atletico Madrid",
            prediction: "Under 2.5",
            odds: 1.85,
            confidence: 80
          }
        ]
      }
    },
    {
      id: 2,
      competition: "Profite de nos pronostics sportifs experts et augmente tes chances de succès ! Analyse poussée, résultats garantis",
      date: "2024-04-03",
      time: "20:45",
      odds: { "1": 2.80 },
      prediction: "1",
      confidence: 75,
      expert: "Top Tipster",
      expertRating: 4.6,
      expertImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      likes: 156,
      comments: 28,
      shares: 8
    },
    {
      id: 3,
      competition: "Profite de nos pronostics sportifs experts et augmente tes chances de succès ! Analyse poussée, résultats garantis",
      date: "2024-04-03",
      time: "20:45",
      odds: { "1": 2.80 },
      prediction: "N",
      confidence: 70,
      expert: "Premier Tips",
      expertRating: 4.7,
      expertImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&q=80&w=800",
      likes: 189,
      comments: 32,
      shares: 15
    },
    {
      id: 5,
      competition: "Profite de nos pronostics sportifs experts et augmente tes chances de succès ! Analyse poussée, résultats garantis",
      date: "2024-04-03",
      time: "20:45",
      odds: { "1": 2.80 },
      prediction: "1",
      confidence: 75,
      expert: "Top Tipster",
      expertRating: 4.6,
      expertImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      likes: 156,
      comments: 28,
      shares: 8
    },
    {
      id: 6,
      competition: "Profite de nos pronostics sportifs experts et augmente tes chances de succès ! Analyse poussée, résultats garantis",
      date: "2024-04-03",
      time: "20:45",
      odds: { "1": 2.80 },
      prediction: "1",
      confidence: 75,
      expert: "Top Tipster",
      expertRating: 4.6,
      expertImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      likes: 156,
      comments: 28,
      shares: 8
    },
  ];

  const handleOpenBetModal = (match: any) => {
    setSelectedMatch(match);
    setIsBetModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <AdBanner className="w-full" variant="bonus" />
      
      <div className="space-y-6">
        {matches.map(match => (
          <div key={match.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Post Header */}
            <div className="p-4 flex items-center space-x-3">
              <img 
                src={match.expertImage}
                alt={match.expert}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{match.expert}</h3>
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{match.expertRating}</span>
                </div>
                <div className="text-sm text-gray-500 flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{match.date}</span>
                  <Clock className="h-4 w-4" />
                  <span>{match.time}</span>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-gray-800 mb-2 text-sm"> {/* Competition text size reduced and no bold */}
                {match.competition}: {match.team1} vs {match.team2}
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                <span>Cotes:</span>
                <span className="px-2 py-1 bg-gray-100 rounded">{match.odds["1"]}</span>
                <span className="px-2 py-1 bg-gray-100 rounded">{match.odds["N"]}</span>
                <span className="px-2 py-1 bg-gray-100 rounded">{match.odds["2"]}</span>
              </div>
            </div>

            {/* Match Image */}
            <div className="aspect-video relative">
              <img 
                src={match.image} 
                alt={match.competition}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Prediction Info */}
            <div className="p-4 border-t">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  <span className="font-medium">Pronostic: {match.prediction}</span>
                </div>
                <span className="text-green-600 font-medium">{match.confidence}% confiance</span>
              </div>

              {/* Social Actions */}
              <div className="flex items-center justify-between pt-3 border-t">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                  <ThumbsUp className="h-5 w-5" />
                  <span>{match.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                  <MessageCircle className="h-5 w-5" />
                  <span>{match.comments}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                  <Share2 className="h-5 w-5" />
                  <span>{match.shares}</span>
                </button>
                <button 
                  onClick={() => handleOpenBetModal(match.detailedPrediction)}
                  className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Voir l'analyse
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <EnergyDrinkAd className="w-full" />

      {/* Modal de pari */}
      {selectedMatch && (
        <Bet
          isOpen={isBetModalOpen}
          onClose={() => setIsBetModalOpen(false)}
          prediction={selectedMatch}
        />
      )}
    </div>
  );
}
