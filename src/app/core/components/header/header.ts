import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  // Properties for header
  isMobileMenuOpen = false;
  mobileDropdowns: { [key: string]: boolean } = {
    studyAbroad: false
  };

  constructor() { }

  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Close all mobile dropdowns when closing menu
    if (!this.isMobileMenuOpen) {
      this.closeMobileDropdowns();
    }
  }

  // Toggle mobile dropdown
  toggleMobileDropdown(dropdownKey: string): void {
    this.mobileDropdowns[dropdownKey] = !this.mobileDropdowns[dropdownKey];
  }

  // Close mobile menu when clicking menu items
  onMobileMenuItemClick(): void {
    this.isMobileMenuOpen = false;
    this.closeMobileDropdowns();
  }

  // Handle overlay click (close menu when clicking outside)
  onOverlayClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('mobile-menu')) {
      this.toggleMobileMenu();
    }
  }

  // Close all mobile dropdowns
  private closeMobileDropdowns(): void {
    Object.keys(this.mobileDropdowns).forEach(key => {
      this.mobileDropdowns[key] = false;
    });
  }

  // Search functionality
  onSearch(): void {
    // Implement search logic here
    // You can open a search modal, navigate to search page, etc.
    console.log('Search clicked');

    // Example: Open search dialog
    // this.dialog.open(SearchDialogComponent);

    // Or navigate to search page
    // this.router.navigate(['/search']);
  }

  // Consultation button functionality
  onConsult(): void {
    // Implement consultation logic here
    console.log('Consultation clicked');

    // Example: Navigate to consultation page
    // this.router.navigate(['/consultation']);

    // Or open consultation modal
    // this.dialog.open(ConsultationDialogComponent);

    // Or show contact info
    // this.showConsultationModal();
  }


}
