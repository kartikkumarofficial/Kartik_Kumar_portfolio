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
      year: 2007,
      title: 'Born',
      description:
          'Version 1.0 released in 2007 - system initialized with curiosity.',
      icon: Icons.code,
      // company: '',
      location: 'Dehradun,India',
    ),
    const CareerEvent(
      year: 2024,
      title: 'MMDU',
      description: "Started my formal academic journey in engineering",
      icon: Icons.code,
      company: 'Maharishi Markandeshwar(Deemed to be University)',
      location: 'Ambala,Haryana',
    ),
    const CareerEvent(
      year: 2024,
      title: 'Flutter Developer',
      description:
          "Specialized in Flutter, my focus is in creating new and innovative flutter applications that leverage the framework's capabilities for high performance and beautiful UI.",
      icon: Icons.code,
      company: 'GDG',
      location: 'Ambala,Haryana',
    ),
    CareerEvent(
      year: DateTime.now().year,
      title: 'Continuous Growth & Learning',
      description:
          "The journey never stops. exploring cutting-edge design patterns, and building innovative digital experiences. Always learning, always growing, always pushing the boundaries of what's possible.",
      icon: Icons.auto_awesome,
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
