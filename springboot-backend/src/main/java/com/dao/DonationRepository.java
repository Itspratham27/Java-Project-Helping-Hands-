package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.model.Donation;
import com.model.Donor;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Integer>{
	@Query("SELECT d from Donation d ORDER BY donationId")
	List<Donation> findAllDonations();

	Donation findByDonationId(int donationId);

	List<Donation> findByDonationType(String donationType);

	List<Donation> findByNgoId(int ngoId);

	List<Donation> findByDonorId(int donorId);

	List<Donation> findByDonationPincode(int donationPincode);

	@Query("DELETE from Donation d where d.donationId > :d")
	@Modifying
	@Transactional
	void deleteByDonationId(@Param("d") int donationId);
	
	@Query("DELETE from Donation d where d.ngoId = :d")
	@Modifying
	@Transactional
	void deleteByNgoId(@Param("d")int ngoId);

	
	@Query("DELETE from Donation e where e.donorId = :e")
	@Modifying
	@Transactional
	void deleteByDonorId(@Param("e")int donorId);
	
	@Query("SELECT d from Donation d WHERE d.donorId = :N OR d.ngoId = :N OR d.donationId = :N OR d.donationPincode = :N")
	@Modifying
	@Transactional
	List<Donation> getItByValue(@Param("N")int id);

	@Query("SELECT d from Donation d WHERE d.donationType = :N")
	@Modifying
	@Transactional
	List<Donation> getNameValue( @Param("N") String name);

}
