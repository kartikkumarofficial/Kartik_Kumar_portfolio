import 'package:flutter/material.dart';

@immutable
class CareerEvent {
  const CareerEvent({
    required this.year,
    required this.title,
    required this.description,
    required this.icon,
    this.company,
    this.location,
  });

  final int year;
  final String title;
  final String description;
  final IconData icon;
  final String? company;
  final String? location;

  static List<CareerEvent> get sampleEvents => [
    const CareerEvent(
      year: 2022,
      title: 'Web Dev Competition',
      description:
      'Built a clean eCommerce platform under pressure and walked away with 2nd Runner Up. First time realizing shipping products is way more fun than just writing code.',
      icon: Icons.code,
      company: 'The TonsBridge School',
      location: 'Dehradun, India',
    ),

    const CareerEvent(
      year: 2024,
      title: 'MMDU',
      description:
      'Started the engineering grind. Spent more time building projects, joining hackathons, and breaking things than sitting still.',
      icon: Icons.school,
      company: 'Maharishi Markandeshwar (Deemed to be University)',
      location: 'Ambala, Haryana',
    ),

    const CareerEvent(
      year: 2024,
      title: 'Core Member - GDG On Campus',
      description:
      'Organized tech events, workshops, and community sessions around Flutter and development culture. Mentored students getting started with Dart and mobile app development.',
      icon: Icons.groups,
      company: 'Google Developer Groups (GDG) On Campus',
      location: 'Maharishi Markandeshwar (Deemed to be University)',
    ),

    const CareerEvent(
      year: 2024,
      title: 'Winner — Next Wave Ideathon',
      description:
      'Built an IoT-driven autonomous traffic management concept using adaptive signals and real-time sensor data to reduce congestion and improve urban mobility.',
      icon: Icons.emoji_events,
      company: 'Chandigarh University',
      location: 'Chandigarh, India',
    ),

    const CareerEvent(
      year: 2024,
      title: 'Flutter Developer',
      description:
      'Locked into Flutter full-time. Focused on building smooth, scalable apps with modern UI, solid architecture, and actual real-world usability.',
      icon: Icons.flutter_dash,
      company: 'GDG',
      // location: 'Ambala, Haryana',
    ),

    const CareerEvent(
      year: 2025,
      title: 'Google Student Ambassador',
      description:
      'Worked on growing developer communities, leading technical initiatives, and helping students get deeper into tech through sessions, collaboration, and hands-on learning.',
      icon: Icons.public,
      company: 'Google',
      location: 'Maharishi Markandeshwar (Deemed to be University)',
    ),

    const CareerEvent(
      year: 2026,
      title: '2nd Runner Up — Capture The Flag',
      description:
      'Competed in cybersecurity and problem-solving challenges involving logic exploitation, debugging, and fast-paced reverse engineering scenarios.',
      icon: Icons.security,
      company: 'MMDU',
      location: 'Maharishi Markandeshwar (Deemed to be University)',
    ),

    const CareerEvent(
      year: 2026,
      title: 'Winner — CodeRush Coding Marathon',
      description:
      'Won a high-intensity competitive programming marathon packed with algorithmic and logic-heavy problems solved under strict time limits.',
      icon: Icons.bolt,
      company: 'MMDU',
      location: 'Maharishi Markandeshwar (Deemed to be University)',
    ),

    const CareerEvent(
      year: 2026,
      title: 'Google Student Ambassador',
      description:
      'Continued as GSA, contributing to developer outreach, technical communities, and student-led initiatives while balancing projects, hackathons, and engineering life.',
      icon: Icons.workspace_premium,
      company: 'Google',
      location: 'Maharishi Markandeshwar (Deemed to be University)',
    ),
  ];

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is CareerEvent &&
          runtimeType == other.runtimeType &&
          year == other.year &&
          title == other.title &&
          description == other.description &&
          icon == other.icon &&
          company == other.company &&
          location == other.location;

  @override
  int get hashCode =>
      year.hashCode ^
      title.hashCode ^
      description.hashCode ^
      icon.hashCode ^
      company.hashCode ^
      location.hashCode;

  @override
  String toString() =>
      'CareerEvent(year: $year, title: $title, company: $company)';
}
