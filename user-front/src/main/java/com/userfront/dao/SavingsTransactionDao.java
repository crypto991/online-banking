package com.userfront.dao;

import com.userfront.domain.SavingsTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingsTransactionDao extends JpaRepository<SavingsTransaction,Long> {
}
