window.NEXUS_COMMANDS = [
  {
    "name": "counting",
    "description": "Richtet einen automatischen Zählkanal ein.",
    "category": "Automation",
    "subcommands": [
      {
        "name": "setup",
        "description": "Setzt den Zählkanal."
      },
      {
        "name": "reset",
        "description": "Setzt die Zahl auf 0 zurück."
      },
      {
        "name": "status",
        "description": "Zeigt den aktuellen Stand."
      }
    ]
  },
  {
    "name": "starboard",
    "description": "Richtet das Community-Starboard ein.",
    "category": "Automation",
    "subcommands": [
      {
        "name": "setup",
        "description": "Konfiguriert das Starboard."
      },
      {
        "name": "disable",
        "description": "Deaktiviert das Starboard."
      },
      {
        "name": "status",
        "description": "Zeigt die Konfiguration."
      }
    ]
  },
  {
    "name": "customcommand",
    "description": "Verwaltet eigene Prefix-Commands.",
    "category": "Automation",
    "subcommands": [
      {
        "name": "add",
        "description": "Erstellt oder überschreibt einen Command."
      },
      {
        "name": "remove",
        "description": "Löscht einen Command."
      },
      {
        "name": "list",
        "description": "Zeigt alle eigenen Commands."
      },
      {
        "name": "prefix",
        "description": "Ändert das Prefix."
      }
    ]
  },
  {
    "name": "rank",
    "description": "Zeigt dein Level oder das eines Nutzers.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "leaderboard",
    "description": "Zeigt die aktivsten Mitglieder.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "balance",
    "description": "Zeigt dein Coin-Guthaben.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "daily",
    "description": "Holt deine tägliche Coin-Belohnung.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "afk",
    "description": "Setzt deinen AFK-Status.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "poll",
    "description": "Startet eine Abstimmung mit Buttons.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "giveaway",
    "description": "Erstellt und verwaltet Giveaways.",
    "category": "Community",
    "subcommands": [
      {
        "name": "start",
        "description": "Startet ein Giveaway."
      },
      {
        "name": "end",
        "description": "Beendet ein Giveaway."
      },
      {
        "name": "reroll",
        "description": "Zieht neue Gewinner."
      }
    ]
  },
  {
    "name": "suggest",
    "description": "Reicht einen Community-Vorschlag ein.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "report",
    "description": "Meldet einen Nutzer privat an das Team.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "userinfo",
    "description": "Zeigt detaillierte Nutzerinformationen.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "serverinfo",
    "description": "Zeigt detaillierte Serverinformationen.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "roleinfo",
    "description": "Zeigt Informationen zu einer Rolle.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "channelinfo",
    "description": "Zeigt Informationen zu einem Kanal.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "avatar",
    "description": "Zeigt einen Avatar in hoher Auflösung.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "membercount",
    "description": "Zeigt die Mitgliederzahlen.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "coinflip",
    "description": "Wirft eine Münze.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "dice",
    "description": "Würfelt eine Zahl.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "choose",
    "description": "Wählt zufällig zwischen Optionen.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "eightball",
    "description": "Beantwortet eine Frage.",
    "category": "Community",
    "subcommands": []
  },
  {
    "name": "config",
    "description": "Konfiguriert Nexus vollständig und getrennt für diesen Server.",
    "category": "Configuration",
    "subcommands": [
      {
        "name": "overview",
        "description": "Zeigt die aktuelle Server-Konfiguration."
      },
      {
        "name": "brand",
        "description": "Passt Name, Footer und Farbe an."
      },
      {
        "name": "minecraft",
        "description": "Speichert den Minecraft-Server."
      },
      {
        "name": "channel",
        "description": "Verbindet einen Systemkanal."
      },
      {
        "name": "role",
        "description": "Verbindet eine Systemrolle."
      },
      {
        "name": "link",
        "description": "Speichert oder entfernt einen Server-Link."
      },
      {
        "name": "module",
        "description": "Aktiviert oder deaktiviert ein Modul."
      },
      {
        "name": "export",
        "description": "Exportiert die Konfiguration dieses Servers als JSON."
      },
      {
        "name": "reset",
        "description": "Setzt nur die gespeicherte Nexus-Konfiguration zurück."
      }
    ]
  },
  {
    "name": "help",
    "description": "Öffnet das interaktive Nexus V1 Control Center.",
    "category": "General",
    "subcommands": []
  },
  {
    "name": "ping",
    "description": "Prüft die Discord-Verbindung und Reaktionszeit.",
    "category": "General",
    "subcommands": []
  },
  {
    "name": "status",
    "description": "Zeigt den Live-Status aller Nexus V1-Kernsysteme.",
    "category": "General",
    "subcommands": []
  },
  {
    "name": "about",
    "description": "Zeigt Informationen über Nexus V1.",
    "category": "General",
    "subcommands": []
  },
  {
    "name": "botinfo",
    "description": "Zeigt Status, Version und Kernsysteme von Nexus V1.",
    "category": "General",
    "subcommands": []
  },
  {
    "name": "invite",
    "description": "Erstellt den offiziellen Einladungslink für den Bot.",
    "category": "General",
    "subcommands": []
  },
  {
    "name": "privacy",
    "description": "Zeigt transparent, welche Daten Nexus V1 speichert.",
    "category": "General",
    "subcommands": []
  },
  {
    "name": "unban",
    "description": "Hebt einen Discord-Ban auf.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "hide",
    "description": "Versteckt den aktuellen Kanal für normale Mitglieder.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "unhide",
    "description": "Macht den aktuellen Kanal wieder sichtbar.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "verify",
    "description": "Zeigt deinen Verifizierungsstatus.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "rules",
    "description": "Zeigt die wichtigsten Serverregeln.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "store",
    "description": "Zeigt den Server-Store.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "website",
    "description": "Zeigt die Server-Webseite.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "links",
    "description": "Verwaltet Webseite, Store und Regeln.",
    "category": "Utility & Fun",
    "subcommands": [
      {
        "name": "set",
        "description": "Speichert einen Link."
      },
      {
        "name": "show",
        "description": "Zeigt alle Links."
      }
    ]
  },
  {
    "name": "timestamp",
    "description": "Erstellt Discord-Zeitstempel für jetzt oder einen Unix-Wert.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "math",
    "description": "Berechnet einen mathematischen Ausdruck.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "password",
    "description": "Generiert ein starkes zufälliges Passwort.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "wordcount",
    "description": "Zählt Wörter und Zeichen.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "color",
    "description": "Zeigt eine Hex-Farbe als Embed.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "randomnumber",
    "description": "Wählt eine zufällige Zahl.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "rps",
    "description": "Spielt Schere, Stein, Papier gegen Nexus V1.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "slots",
    "description": "Spielt eine harmlose Coin-Slotrunde.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "rate",
    "description": "Bewertet etwas zum Spaß.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "ship",
    "description": "Berechnet einen Spaß-Kompatibilitätswert.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "hug",
    "description": "Umarmt ein Mitglied.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "compliment",
    "description": "Macht einem Mitglied ein Kompliment.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "joke",
    "description": "Erzählt einen Minecraft-Witz.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "roast",
    "description": "Gibt einen harmlosen Gaming-Roast.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "achievement",
    "description": "Verleiht ein Spaß-Achievement.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "servericon",
    "description": "Zeigt das Server-Icon.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "banner",
    "description": "Zeigt den Server-Banner, falls vorhanden.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "event",
    "description": "Erstellt ein Event mit Zusage-Buttons.",
    "category": "Utility & Fun",
    "subcommands": []
  },
  {
    "name": "hack",
    "description": "Startet eine krasse, aber komplett harmlose Fake-Hack-Simulation.",
    "category": "Fun",
    "subcommands": []
  },
  {
    "name": "ban",
    "description": "Bannt einen Nutzer professionell.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "kick",
    "description": "Kickt einen Nutzer vom Server.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "timeout",
    "description": "Schaltet einen Nutzer zeitweise stumm.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "untimeout",
    "description": "Entfernt einen Timeout.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "warn",
    "description": "Verwarnt einen Nutzer mit Akteneintrag.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "warnings",
    "description": "Zeigt die Warnakte eines Nutzers.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "clearwarnings",
    "description": "Löscht die Warnakte eines Nutzers.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "clear",
    "description": "Löscht mehrere Nachrichten zuverlässig.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "purge",
    "description": "Filtert und löscht gezielt Nachrichten.",
    "category": "Moderation",
    "subcommands": [
      {
        "name": "user",
        "description": "Nachrichten eines Nutzers löschen."
      },
      {
        "name": "contains",
        "description": "Nachrichten mit Text löschen."
      },
      {
        "name": "bots",
        "description": "Bot-Nachrichten löschen."
      }
    ]
  },
  {
    "name": "lock",
    "description": "Sperrt den aktuellen Kanal.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "unlock",
    "description": "Entsperrt den aktuellen Kanal.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "slowmode",
    "description": "Setzt den Slowmode im aktuellen Kanal.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "nickname",
    "description": "Ändert oder entfernt einen Nicknamen.",
    "category": "Moderation",
    "subcommands": []
  },
  {
    "name": "role",
    "description": "Vergibt oder entfernt eine Rolle.",
    "category": "Moderation",
    "subcommands": [
      {
        "name": "add",
        "description": "Rolle vergeben"
      },
      {
        "name": "remove",
        "description": "Rolle entfernen"
      }
    ]
  },
  {
    "name": "server-reset",
    "description": "Sichert und löscht kontrolliert Kanäle, Kategorien oder Rollen.",
    "category": "Server Control",
    "subcommands": [
      {
        "name": "preview",
        "description": "Zeigt genau, was gelöscht werden könnte."
      },
      {
        "name": "execute",
        "description": "Führt den Server-Reset nach doppelter Bestätigung aus."
      }
    ]
  },
  {
    "name": "announce",
    "description": "Sendet eine professionelle Ankündigung.",
    "category": "Staff Tools",
    "subcommands": []
  },
  {
    "name": "embed",
    "description": "Baut ein eigenes Premium-Embed.",
    "category": "Staff Tools",
    "subcommands": []
  },
  {
    "name": "say",
    "description": "Sendet eine Nachricht über Nexus V1.",
    "category": "Staff Tools",
    "subcommands": []
  },
  {
    "name": "serveraudit",
    "description": "Analysiert die Nexus V1-Servereinrichtung.",
    "category": "Staff Tools",
    "subcommands": []
  },
  {
    "name": "setup",
    "description": "Richtet Nexus V1 und den kompletten Minecraft-Discord ein.",
    "category": "Core Systems",
    "subcommands": [
      {
        "name": "quickstart",
        "description": "Richtet den kompletten Minecraft-Discord inklusive Rollen, Rechten, Kanälen, Voice und Panels ein."
      },
      {
        "name": "diagnose",
        "description": "Prüft Rechte, Rollen, Kanäle, Minecraft und gespeicherte Einstellungen."
      },
      {
        "name": "assistant",
        "description": "Zeigt die empfohlene Einrichtung für neue Server."
      },
      {
        "name": "overview",
        "description": "Zeigt die aktuelle Konfiguration."
      },
      {
        "name": "minecraft",
        "description": "Konfiguriert den Minecraft-Server."
      },
      {
        "name": "channel",
        "description": "Speichert einen Systemkanal."
      },
      {
        "name": "role",
        "description": "Speichert eine Systemrolle."
      }
    ]
  },
  {
    "name": "panel",
    "description": "Veröffentlicht ein interaktives Nexus V1 Premium-Panel.",
    "category": "Core Systems",
    "subcommands": []
  },
  {
    "name": "minecraft",
    "description": "Minecraft-Server-Informationen und Live-Status.",
    "category": "Core Systems",
    "subcommands": [
      {
        "name": "status",
        "description": "Prüft den Server live."
      },
      {
        "name": "ip",
        "description": "Zeigt die Serveradresse."
      },
      {
        "name": "players",
        "description": "Zeigt online Spieler, sofern verfügbar."
      },
      {
        "name": "panel",
        "description": "Veröffentlicht ein Status-Panel."
      }
    ]
  },
  {
    "name": "ticket",
    "description": "Verwaltet das Premium-Ticket-System.",
    "category": "Core Systems",
    "subcommands": [
      {
        "name": "panel",
        "description": "Veröffentlicht das Ticketpanel."
      },
      {
        "name": "overview",
        "description": "Zeigt Ticket-Statistiken."
      },
      {
        "name": "close",
        "description": "Schließt das aktuelle Ticket."
      }
    ]
  },
  {
    "name": "application",
    "description": "Verwaltet das Premium-Bewerbungssystem.",
    "category": "Core Systems",
    "subcommands": [
      {
        "name": "panel",
        "description": "Veröffentlicht das Bewerbungspanel."
      },
      {
        "name": "overview",
        "description": "Zeigt Bewerbungsstatistiken."
      }
    ]
  },
  {
    "name": "security",
    "description": "Steuert die Nexus V1-Schutzsysteme.",
    "category": "Core Systems",
    "subcommands": [
      {
        "name": "overview",
        "description": "Zeigt alle Schutzmodule."
      },
      {
        "name": "configure",
        "description": "Schaltet ein Schutzmodul um."
      },
      {
        "name": "audit",
        "description": "Prüft Rechte und Einrichtung."
      },
      {
        "name": "lockdown",
        "description": "Sperrt den aktuellen Kanal sofort."
      }
    ]
  },
  {
    "name": "backup",
    "description": "Erstellt und prüft lokale Nexus V1-Datenbankbackups.",
    "category": "Core Systems",
    "subcommands": [
      {
        "name": "create",
        "description": "Erstellt sofort ein Backup."
      },
      {
        "name": "info",
        "description": "Zeigt vorhandene Backups."
      }
    ]
  }
];
